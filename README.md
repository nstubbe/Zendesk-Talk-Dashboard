# ZendeskDashboard

This small angular application displays some statistics about the callcenter functionality in the Zendesk platform. Currently it displays the number of people in queue and the longest wait time of people in queue, alongside everyone who is not unavailable in a list.

# Known issue

When someone makes a call from Zendesk to an outside number, the people in queue count goes up by 1 until the call is picked up. This is an issue in the data Zendesk is supplying. I contacted them, but although they recognized this as a bug, they have no immediate plans to fix the issue.
