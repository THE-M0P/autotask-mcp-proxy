# Tickets

Describes an Autotask Ticket. Tickets define service requests within the Autotask system. Autotask users manage Tickets through a number of modules including Service Desk, Home, CRM, and Contracts. They can click New Ticket on the Autotask interface sub-navigation menu to open the New Ticket window.

- **Entity path:** `/atservicesrest/v1.0/Tickets`
- **Capabilities:** create ✓ · update ✓ · query ✓ · delete —
- **Parent:** None
- **Children:** TicketAdditionalConfigurationItems, TicketAdditionalContacts, TicketAttachments, TicketChangeRequestApprovals, TicketCharges, TicketChecklistItems, TicketChecklistLibraries, TicketNotes, TicketRmaCredits, TicketSecondaryResources, TicketTagAssociations

## Access URLs

- `Tickets/query (GET, POST)`
- `Tickets/{id} (GET)`
- `Tickets/query/count (GET, POST)`
- `Tickets (PUT, POST, PATCH)`
- `Tickets/entityInformation (GET)`
- `Tickets/entityInformation/fields (GET)`
- `Tickets/entityInformation/userDefinedFields (GET)`

## Fields (71)

| Field | Type | Notes |
|---|---|---|
| `assignedResourceroleID` | integer | Autotask allows Role to be inactivated. You can update an existing Ticket that has a Resource + Role combination that uses an inactive role. An attempt to create a Ticket using a Resource + Role combination with an inactive Role will trigger an error. |
| `billingCodeID` | integer | billingCodeID is required on create and update if your company has enabled the Autotask system setting that requires a Work Type on a Ticket. The billingCodeID field must reference a Work Type allocation code. |
| `changeApprovalBoard` | integer | changeApprovalBoard must reference an active Change Approval Board. |
| `changeApprovalStatus` | integer | changeApprovalStatus can only be set to Requested or Assigned. All other statuses, Not Assigned, Partially Approved, Approved, or Rejected can only be set by the system. If changeApprovalStatus = Assigned, user can change it to Requested (only). If changeApprovalStatus = Requested, user can change it to Assigned (only) |
| `changeApprovalType` | integer | If a value is not provided for changeApprovalType: If the ticket type = Change Request, then changeApprovalType is set to the default value. If the ticket type is not = Change Request and a current changeApprovalType value exists on the entity, then the field is cleared. This allows the field to be cleared for tickets that are not Change Request type tickets. Otherwise, do nothing. |
| `changeInfoFields` |  | changeInfoFields are available regardless of whether they are active or inactive. |
| `companyID` | integer | ticket.companyID cannot be changed if the ticket has an associated and posted TimeEntry, TicketCharge, or Expense. If the ticket has no associated posted items and ticket.companyID is changed, any associated (non-posted) Contract, TimeEntries, or TicketCosts are set to Null, along with any Service or ServiceBundle items associated with the TimeEntries or TicketCosts. expenseItem.companyID is updated and expenseItem.projectID, expenseItem.taskID, or expenseItem.ticketID is set to Null. |
| `configurationItemID` | integer | On create, if configurationItemID is populated, the configurationItem.companyID must = ticket.companyID On update, configurationItem.ID cannot be updated to an configurationItem where configurationItem.companyID ≠ ticket.companyID. If the ticket category = 'RMA', the configurationItemID is required. That configurationItem must also reference a Product that is isEligibleForRma. NOTE If the configurationItem value is not being updated, and for some reason it is already associated with a Company that is different from the Ticket Company, the update will not fail. |
| `contactID` | integer | For the contactID field, Contact.companyID must = ticket.companyID or the parentCompanyID of ticket.companyID. update is allowed on a Ticket with an inactive contactID value if that value is not being changed, or if a new active value is assigned. A new inactive contactID value cannot be assigned on create or update. If the ticket category = 'RMA', and no value is supplied for the Contact field, it will be set to the contact of the supplied asset. |
| `contractID` | integer | If a ticket is created or updated with a sub-issue type that is excluded from the associated contract, the ticket's contractID will be updated to that of the exclusion contract, if it exists. If it does not exist, the contractID will be set to null. |
| `creatorResourceID` | integer | creatorResourceID can return a contactID. creatorType specifies whether the creatorResourceID refers to a Resource or a Contact. |
| `description` | string (8000) | When you use the API to update this field, the REST API will return the text-only version of its content. If you send the content back, the Rich Text and all images that it contains will be lost . You cannot use the API to create items that contain Rich Text, but you can add Rich Text later via a supported method. To learn more, refer to The Rich Text editor . |
| `dueDateTime` | datetime | This field is required unless the supplied ticket category or the user's default ticket category has both the Due Date and Due Time configured. If the ticket category has only the due date or only the due time configured, then the API ticket.dueDateTime will be required, and not supplying a value will return an error message. If the ticket is created from a Datto RMM alert and the Autotask ticket category has a Due Date and Time configured, then we will clear the dueDateTime field on the alert supplied by Datto RMM, and apply the default from the Autotask ticket category. |
| `isAssignedToComanaged` | boolean | This field is set in the UI via resource assignment or through options such as "Assign to Co-Managed" or "Transfer to Service Provider." If the API changes a resource assignment, it may cause the isAssignedToComanaged value to change. |
| `isVisibleToComanaged` | boolean | If you do not specify a value for this field, the API will use the ticket category's default co-managed visibility setting. However, if the ticket category is set to "Not Visible," the user does not supply a value for isVisibleToComanaged, and the assignedResourceID is a co-managed resource, the system will automatically set IsVisibleToComanaged to "true." But, if you supply a "false" value, the API will surface an error. |
| `lastActivityPersonType` | integer | lastActivityPersonType values indicating whether the initiator of the last activity was a resource or a contact. This field is not filterable for tickets in the API. |
| `lastTrackedModificationDateTime` | datetime | Tracks updates to any field except changes to the lastActivityDate, lastCustomerNotificationDateTime, lastCustomerVisibleActivityDateTime. UDF changes are included in the criteria for updating lastTrackedModificationDate. |
| `opportunityID` | integer | For the opportunityID field, Opportunity.companyID must = ticket.companyID. |
| `priority` | integer | On create, priority must be an active priority. If the current priority is inactive, update is allowed if the priority value is not changed, or if priority is changed to an active value. |
| `problemTicketId` | integer | problemTicketId cannot = ticketID of a ticket that is already associated with a problemTicketId; that is, an incident ticket already associated with a problem ticket cannot become a problem ticket. |
| `projectID` | integer | projectID must be associated with the same company as the ticket (ticket.companyID). |
| `queueID` | integer | queueID requirement - The ticket's category (Ticket.ticketCategory) will determine whether or not Ticket.queueID is required, based on the category's 'Queue is Required' setting. If queueID does not meet the requirement specified by the associated ticket category's 'Queue is Required' setting, as listed below, an error will occur. If setting equals 'Always', the API will always require the queueID value. If setting equals 'Never' then the API will not require the queueID value. If setting equals 'RequiredWhenPrimaryResourceIdBlank', then the API will produce an error when both the queueID and resourceID fields are empty. |
| `rmaStatus` | integer | This field is editable for tickets whose ticket category is 'RMA.' ◦ Attempting to edit this field on a ticket with a different ticket category will result in the supplied value being ignored. If a ticket is created with the 'RMA' ticket category via the API and no value is supplied for this field, the ticket category default value for the field will be used. |
| `rmaType` | integer | This field is editable for tickets whose ticket category is 'RMA.' Attempting to edit this field on a ticket with a different ticket category will result in the supplied value being ignored. |
| `serviceLevelAgreementID` | integer | The ticket SLA is defaulted in using the following logic: Check the asset. If the asset is associated to an SLA, then use that ID. If there is no Asset SLA, then check the Contract Service or Bundle SLA. If the Contract Service or Bundle is associated to an SLA, then use that ID. If there is no Contract Service or Bundle SLA, then check the Contract. If the Contract is associated to an SLA, then use that ID. If no asset or contract SLA, then check the Ticket Category. If the ticket category is associated to an SLA, then use that ID. |
| `serviceLevelAgreementPausedNextEventHours` | decimal | serviceLevelAgreementPausedNextEventHours (read-only) is calculated as the time differential between the most recent time the ticket status changed to Waiting Customer and the time of the next SLA target. Calculated in hours only. Field is cleared when ticket comes out of Waiting Customer status and is recalculated every time ticket goes back into Waiting Customer status. |
| `source` | integer | ticket.source is not required; however, in the UI the Source field defaults to 'Other', so for tickets created through the UI, the value for ticket.source is never Null. If no value is provided for ticket.source when a ticket is created via the API, the default Source value is returned on update. For additional information, refer to REST API best practices . |
| `ticketCategory` | integer | The Ticket entity will support the Ticket Category: If no ticketCategory is passed in, the API will use the logged in resource's default category; if the resource does not have a default category, the API will use the Company's system default ticket category. ticketCategory default values will be applied unless another value is passed in. Ticket cannot be created with an inactive ticketCategory. On update, a ticketCategory cannot be updated to another ticketCategory that is inactive. In Picklist, an inactive ticketCategory displays in italic text. The API does not respect the ticketCategory's 'required' and 'available list item' settings, with the exception of the 'Queue is Required' setting. When a ticket category is applied and it changes the value of changeApprovalType, the field will be updated even if the ticket type does not = ChangeApproval. While this is not possible in the UI, in the API, you can create tickets with a ticket category of 'API.' The following fields are not editable when ticket category is RMA: companyID, configurationItemID, ticketType. |
| `ticketNumber` | string (50) | On create , you can specify a ticket number prefix for this resource. The prefix must follow the format ' T YYYYMMDD.' For example, 'T20200615.' The 'YYYYMMDD' value must be a date less than or equal to today's date. If the API receives an invalid prefix, it will automatically generate one and assign it to the resource. You cannot change a resource's ticket number prefix once created. Autotask will automatically assign the record number that follows the prefix. For example, 'T20200615.0674.' |
| `ticketType` | integer | Tickets with no ticketType specified are set automatically to Service Request. Tickets where Type = Service Request cannot be associated with a ProblemTicket ID. If ticketType = Service Request and the ticket also specifies a problemTicketId, the ticket type is updated to Service Request. An error message indicates that Service Request tickets cannot be associated with a problem ticket. ticketType must = Incident before the ticket can be associated with a problemTicketId. If ticketType = Problem and incidents are associated with the ticket, ticketType cannot be changed to Incident or Service Request until the incidents are disassociated from the ticket. You cannot create a ticket with ticketType = Problem and specify a ProblemTicket ID or specify problemTicketId for an existing Ticket with ticketType=Problem; that is, a ticket that is already a problem ticket cannot become an incident to another problem ticket. If ticketType = ChangeRequest, problemTicketId cannot have a value. If a ticket has ticketType not equal to 'Change Request' and it has data in one or more the fields that are exclusive to Change Request tickets, then the ticket can be saved. Although the data will remain intact and will be reportable, it will not be viewable in the ticket in Autotask. This includes the following fields: changeApprovalBoard, changeApprovalType, changeApprovalStatus, changeInfoField1, changeInfoField2, changeInfoField3, changeInfoField4, changeInfoField5. The ChangeManagement module must be enabled to create a new ticket with ticketType = Change Request. Any existing Change Request tickets can be edited. Other fields related to change request will accept values when Change Management is not enabled, but that data will not be available through the UI. If the ticket catgeory = 'RMA', the ticketType is set to 'Change Request', regardless of the value that is supplied. |
| `apiVendorID` | integer |  |
| `assignedResourceID` | integer |  |
| `changeInfoField1` | string (8000) |  |
| `changeInfoField2` | string (8000) |  |
| `changeInfoField3` | string (8000) |  |
| `changeInfoField4` | string (8000) |  |
| `changeInfoField5` | string (8000) |  |
| `companylocationID` | integer |  |
| `completedByResourceID` | integer |  |
| `completedDate` | datetime |  |
| `contractServiceBundleID` | long |  |
| `contractServiceID` | long |  |
| `createDate` | datetime |  |
| `createdByContactID` | integer |  |
| `creatorType` | integer |  |
| `currentServiceThermometerRating` | integer |  |
| `estimatedHours` | decimal |  |
| `externalID` | string (50) |  |
| `firstResponseAssignedResourceID` | integer |  |
| `firstResponseDateTime` | datetime |  |
| `firstResponseDueDateTime` | datetime |  |
| `firstResponseInitiatingResourceID` | integer |  |
| `hoursToBeScheduled` | decimal |  |
| `impersonatorCreatorResourceID` | integer |  |
| `issueType` | integer |  |
| `lastActivityDate` | datetime |  |
| `lastActivityResourceID` | integer |  |
| `lastCustomerNotificationDateTime` | datetime |  |
| `lastCustomerVisibleActivityDateTime` | datetime |  |
| `previousServiceThermometerRating` | integer |  |
| `purchaseOrderNumber` | string (50) |  |
| `resolution` | string (32000) |  |
| `resolutionPlanDateTime` | datetime |  |
| `resolutionPlanDueDateTime` | datetime |  |
| `resolvedDateTime` | datetime |  |
| `resolvedDueDateTime` | datetime |  |
| `serviceLevelAgreementHasBeenMet` | boolean |  |
| `serviceThermometerTemperature` | integer |  |
| `status` | integer |  |
| `subIssueType` | integer |  |
| `title` | string (255) |  |

