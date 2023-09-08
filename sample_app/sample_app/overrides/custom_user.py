import frappe
from frappe.core.doctype.user.user import User
from frappe.desk.notifications import clear_notifications
from frappe import STANDARD_USERS
from frappe.utils import get_url, random_string
from frappe.utils import (
	cint,
	escape_html,
	flt,
	format_datetime,
	get_formatted_email,
	get_system_timezone,
	has_gravatar,
	now_datetime,
	today,
)


class CustomUser(User):
    def reset_password(self, send_email=False, password_expired=False):
       
        key = random_string(32)
        self.db_set("reset_password_key", key)
        self.db_set("last_reset_password_key_generated_on", now_datetime())

        url = "/sample_app/update_password?key=" + key
        if password_expired:
            url = "sample_app/update_password?key=" + key + "&password_expired=true"

        link = get_url(url)
        if send_email:
            self.password_reset_mail(link)

        return link

    def password_reset_mail(self, link):
        self.send_login_mail("Password Reset", "password_reset", {"link": link}, now=True)

    def send_login_mail(self, subject, template, add_args, now=None):
        """send mail with login details"""
        from frappe.utils import get_url
        from frappe.utils.user import get_user_fullname

        created_by = get_user_fullname(frappe.session["user"])
        if created_by == "Guest":
            created_by = "Administrator"

        args = {
            "first_name": self.first_name or self.last_name or "user",
            "user": self.name,
            "title": subject,
            "login_url": get_url(),
            "created_by": created_by,
        }

        args.update(add_args)

        sender = (
            frappe.session.user not in STANDARD_USERS and get_formatted_email(frappe.session.user) or None
        )

        frappe.sendmail(
            recipients=self.email,
            sender=sender,
            subject=subject,
            template=template,
            args=args,
            header=[subject, "green"],
            delayed=(not now) if now is not None else self.flags.delay_emails,
            retry=3,
        )