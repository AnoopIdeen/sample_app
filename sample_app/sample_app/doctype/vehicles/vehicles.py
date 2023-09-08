# Copyright (c) 2023, asd and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Vehicles(Document):
	pass
@frappe.whitelist()
def sample_function(doctype):
	return 'Hello' + doctype