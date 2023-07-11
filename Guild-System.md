- [guild](#guild)
- [member](#member)
- [guild\_join\_type](#guild_join_type)
- [message](#message)
- [item](#item)
- [inventory](#inventory)


Guild APIs are in-development and may not have strong example usage or full functionality.

# guild

Guild table data structure:
```lua
{
    guild_id,
    guild_name,
    guild_tag,
    announcement,
    members,
    guild_badge = {
        background,
        pattern,
        icon,
    },
    league,
    guild_join_type,
    skills,
    contributions,
    total_contribution
}
```

# member

Member table data structure:
```lua
{
    uuid,
    role,
    tag,
    name,
    level,
    last_login_time,
    badge = {
        background,
        pattern,
        icon,
    },
    contributions,
    join_time
}
```

# guild_join_type

0: Anyone can join.
1: Need approve

# message

Message table data structure:
```lua
{
	sender_uuid,
	sender_uuid,
	type,
	timestamp
}
```

If type == ‘MemberLeaveGuild’ or type == ‘MemberJoinGuild’
`message` also has player_badge

If type == ‘GuildSkillUpgrade’
`message` also has key and level

If type == ‘RequestItem’
`message` also has key and value

# item

Item data type:

```lua
{
	key,
	value
}
```

# inventory

Table of [items](#item). 
