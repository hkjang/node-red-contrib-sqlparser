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