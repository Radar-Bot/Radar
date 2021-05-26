---
id: welcome
title: Welcome Message
sidebar_label: Welcome Message
description: Setup welcome messages.
---

# Welcome/Leave Message
Setup welcome messages.

:::warning Permissions Required
You require `MANAGE SERVER` permission to use this commands.
:::

### Usages
```
r?setimage
r?setchannel
r?setmessage
r?resetimage
r?resetchannel
r?resetmessage
```
## Enable/Disable


 - To __enable__ this feature, type `r?togglewl on` in any of the channels the bot has access to.
 - To __disable__ this feature, type `r?togglewl off` in any of the channels the bot has access to.

## Welcome Message
Radar has multiple variables which you could be used in welcome messages, check with `r?variables`.

To view current setup, type `r?preview`.

##### Default Messsage
```yaml
[user:mention], Welcome to ** [server:name] **
```
 
| Variable | Description |
|--------|-------------|
|`[user:mention]`|Mention the User
|`[user:tag]`|Show the tag of the User
|`[user:creation]`| Show the user account creation date (Do MMM YYYY)
|`[user:createdAgo]`|Show how long ago the account was created
|`[server:name]`| Show the Server Name
|`[server:members]`| Server Member Count

## FAQ
### Why aren't the welcome messages sent?
The bot needs sufficient permissions to send messages in the welcome channel. DM messages becomes impossible only if the user blocks external DMs. 



