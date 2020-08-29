Sql Parser NodeRED Node
=====================

Install
-------

`npm install -g node-red-contrib-sqlparser`

Example 
-------
```javascript
msg.payload = 'select col1,col2 from tableaaa aaa '
msg.payload += 'where 1=1 '
msg.payload += 'and aaa.col1 = :col1_param '
msg.payload += 'and aaa.col2 = :col2_param '
return msg;
```
<a href="https://www.buymeacoffee.com/gagagiga" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

Result
-------
```json
{
  "with": null,
  "type": "select",
  "options": null,
  "distinct": null,
  "columns": [
    {
      "expr": {
        "type": "column_ref",
        "table": null,
        "column": "col1"
      },
      "as": null
    },
    {
      "expr": {
        "type": "column_ref",
        "table": null,
        "column": "col2"
      },
      "as": null
    }
  ],
  "from": [
    {
      "db": null,
      "table": "tableaaa",
      "as": "aaa"
    }
  ],
  "where": {
    "type": "binary_expr",
    "operator": "AND",
    "left": {
      "type": "binary_expr",
      "operator": "AND",
      "left": {
        "type": "binary_expr",
        "operator": "=",
        "left": {
          "type": "number",
          "value": 1
        },
        "right": {
          "type": "number",
          "value": 1
        }
      },
      "right": {
        "type": "binary_expr",
        "operator": "=",
        "left": {
          "type": "column_ref",
          "table": "aaa",
          "column": "col1"
        },
        "right": {
          "type": "param",
          "value": "col1_param"
        }
      }
    },
    "right": {
      "type": "binary_expr",
      "operator": "=",
      "left": {
        "type": "column_ref",
        "table": "aaa",
        "column": "col2"
      },
      "right": {
        "type": "param",
        "value": "col2_param"
      }
    }
  },
  "groupby": null,
  "having": null,
  "orderby": null,
  "limit": null,
  "for_update": null
}

```

sample flows
-------
```json
[{"id":"5eb2ca3c.6e5154","type":"sqlparser","z":"eae436c6.b3e6a8","name":"Parse SQL to JSON","x":480,"y":80,"wires":[["3c452692.6e4aba","ecc29c05.98fec"]]},{"id":"c6b38955.11bfe8","type":"inject","z":"eae436c6.b3e6a8","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":140,"y":80,"wires":[["b223d254.93964"]]},{"id":"b223d254.93964","type":"function","z":"eae436c6.b3e6a8","name":"","func":"msg.payload = 'select col1,col2 from tableaaa aaa '\nmsg.payload += 'where 1=1 '\nmsg.payload += 'and aaa.col1 = :col1_param '\nmsg.payload += 'and aaa.col2 = :col2_param '\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":280,"y":80,"wires":[["5eb2ca3c.6e5154"]]},{"id":"3c452692.6e4aba","type":"debug","z":"eae436c6.b3e6a8","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":690,"y":120,"wires":[]},{"id":"e6090bc6.7f4f98","type":"sqlparser","z":"eae436c6.b3e6a8","name":"Parse JSON to SQL","x":880,"y":80,"wires":[["d2f344b3.20ced8"]]},{"id":"ecc29c05.98fec","type":"function","z":"eae436c6.b3e6a8","name":"","func":"msg.sqlify = true;\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":680,"y":80,"wires":[["e6090bc6.7f4f98"]]},{"id":"d2f344b3.20ced8","type":"debug","z":"eae436c6.b3e6a8","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":1090,"y":80,"wires":[]}]
```
