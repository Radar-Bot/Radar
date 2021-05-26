---
id: application
title: Applications
hide_title: true
sidebar_label: Applications
description: Setup an applications for your server
---

# Applications System
Setup an applications for your server.

:::warning Permissions Requirement
You require `MANAGE SERVER` permission to use this command.
:::

Radar Applications System is easy to configure & use. Here is how to setup applications in your server. Radar also supports MCQ type questions.

## Setup
Instructions: 
-  Go to your server.
-  Type `r?toggleapply <on/off>`.
-  Setup Moderator role with `r?applyrole <@role>`.
-  Set application logging with `r?applylog <#channel>`.
-  And you're ready to go, `r?app-accept` and `r?app-decline` are for approval or declining.

## Open/Close
This toggle is used to open & close applications. This can be done either via the Dashboard or though Commands.

- Through Commands
  The command `r?toggleapply` is used to toggle the applications.

  | Command | Description |
  |--------|------------|
  |`toggleapply on` | Opens application. Users can apply using the command `apply`|
  |`toggleapply off` | Closes Application.|


## Application Logging
To view the applications submitted, you need:
- Manual Review
  You can view review the application using the `app-approve` or `app-decline` commands.<br>

## Acceptance Role Management
While/After collecting the applications, you can award acceptance role.<br>
When you accept, the applicant receives the role set.<br>

## Acceptance/Denial DMs
While/After collecting the applications, you can accept/deny them.<br>
When you accept/deny, the applicant is send a DM of their application status.<br>
**Note: Acceptance/Denial of an Application Deletes it Permenantly**

| Command | Description |
|--------|------------|
|`app-approve [user ID] (custom dm response)` | Accepts the Application/User ID |
|`app-decline [user ID] (custom dm response)` | Denies the Application/User ID |

## Deleting Applications
If a user has an application in the database, the user will not be able to apply again unless its deleted either using `app-delete` (soon) or `app-approve`/`app-decline`.