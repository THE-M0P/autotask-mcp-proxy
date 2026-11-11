# ArticleTicketAssociations

This entity records existing associations between tickets and Knowledgebase articles in Autotask.

- **Entity path:** `/atservicesrest/v1.0/ArticleTicketAssociations`
- **Capabilities:** create ✓ · update — · query ✓ · delete ✓
- **Parent:** KnowledgeBaseArticles

## Access URLs

- `ArticleTicketAssociations/{id} (GET)`
- `ArticleTicketAssociations/query (GET, POST)`
- `ArticleTicketAssociations/query/count (GET, POST)`
- `ArticleTicketAssociations/entityInformation (GET)`
- `ArticleTicketAssociations/entityInformation/fields (GET)`

## Fields (2)

| Field | Type | Notes |
|---|---|---|
| `articleID` | integer | KnowledgeBaseArticles |
| `ticketID` | integer | Tickets |

