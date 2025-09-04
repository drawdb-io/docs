---
sidebar_position: 2
---

import ThemedImage from '../src/components/ThemedImage';
import Flex from '../src/components/Flex';
import FAQ from '../src/components/FAQ';

# Create a diagram

To begin, go to the [online editor](https://www.drawdb.app/editor). If a previous digram gets loaded you can go to `File > New` and pick the blank diagram option.

<Flex>
<ThemedImage
    lightImageSrc={require("./img/light/file-new.png").default}
    darkImageSrc={require("./img/dark/file-new.png").default}
    alt="New File"
/>
<ThemedImage
    lightImageSrc={require("./img/light/create-blank-diagram.png").default}
    darkImageSrc={require("./img/dark/create-blank-diagram.png").default}
    alt="Create a blank diagram"
/>
</Flex>

## Pick a database

You can create database-specific or generic diagrams.

- Generic diagrams can be imported from or exported to any of the supported SQL flavors, however, they support a fewer number of types.
- Database-specific diagrams support all data types for the selected database and other database-specific features.

The following databases are supported:

- MySQL
- PostgreSQL
- SQLite
- MariaDB
- MSSQL
- Oracle

For the moment the import SQL diagram has not been enabled for Oracle Data Base.

<ThemedImage
    lightImageSrc={require("./img/light/pick-db.png").default}
    darkImageSrc={require("./img/dark/pick-db.png").default}
    alt="Pick a database"
/>

## Tables

Add tables either from the sidebar or the toolbar and define columns.

<ThemedImage
    lightImageSrc={require("./img/light/define-tables.gif").default}
    darkImageSrc={require("./img/dark/define-tables.gif").default}
    alt="Define tables"
/>

### Table Fields

You can define the following fields for a column:

- Name
- Datatype
- Not null
- Primary
- Unique
- Autoincrement
- Default
- Check constraint
- Comment

:::info

If multiple primary keys are defined a composite primary key will be generated in the SQL output.

:::

:::info

The check constraint will be injected into the SQL output as is.

:::

:::info

You can create attributes sequentially by pressing enter in the last field.

:::

### Indexes

You can define the following fields for an index:

- Fields
- Unique
- Name

## Relationships

To create a relationship and define foreign keys, click and hold the blue dot on the primary key and drag it to the table with which you want to form the relationship. This will cause a new row to be automatically generated in the child table that will have the primary key information.

<ThemedImage
    lightImageSrc={require("./img/light/create-relationship.gif").default}
    darkImageSrc={require("./img/dark/create-relationship.gif").default}
    alt="Create a relationship"
/>

The gif shows one of three possible notations selectable in the modeler; for each notation, the rendering and some actions may change.

<!--If at some point you realize that the keys are flipped you can swap them from the `Relationships` tab. Open the relationship you'd like to edit, click on the more button (three dots) next to the primary and forign columns, and then swap. -->!

To delete the relationship, simply double-click on the relationship and select the delete button or delete the auto-generated foreign key from the table.

You can define the following fields for a relationship:

- Name
- Relationship type
    - One to One
    - One to Many
    - Subtype
- Cardinality
    - Only available for One to one
        - (0,1)
        - (0,1)
    - Only available for One to Many
        - (0,*)
        - (1,*)
- Subtype restriction (Only available for Subtype relations)
    - Disjoint Total
    - Disjoint Partial
    - Overlaping Total
    - Overlaping Partial
- On Delete Action
- On Update Action
  - No action
  - Restrict
  - Cascade
  - Set null
  - Set default

<FAQ header="How can I define Many to Many relationships?">

In order to model Many to Many relationships you will need to use a join table.

A join table is a third table that contains foreign keys to the 2 tables you'd like to connect. Additionally, you can add any other relationship-specific columns to the table. For example:

<ThemedImage lightImageSrc={require("./img/light/many-to-many.png").default} darkImageSrc={require("./img/dark/many-to-many.png").default} alt="Pick a database" />

</FAQ>

## Subject areas

You add subject areas from the `Subject Areas` tab in the sidebar or from the toolbar. They logically group the tables in subject areas to make it easier to navigate the diagram; they server a pure visual purpose and do not translate to any SQL logic and are not reflected in the generated scripts.

## Notes

You add notes from the `Notes` tab in the sidebar or from the toolbar. You can use notes to capture any additional comments in the diagram.

## Custom Types

If the diagram type supports custom types there will be an additional `Types` tab in the sidebar. In generic diagrams the following conversions will take place when exporing to SQL.

| **Database**      | **Behavior**                                        |
| ----------------- | --------------------------------------------------- |
| **MySQL/MariaDB** | A JSON with the corresponding JSON validation check |
| **PostgreSQL**    | A composite type                                    |
| **SQLite**        | BLOB                                                |
| **MSSQL**         | A type alias to the first field                     |

Upon adding a new type, it will be added to the list of types you can choose from when editing a column.

## Enums (PostgreSQL)

If the diagram is for PostgreSQL there will be an additional `Enums` tab in the sidebar where you can define enum values. Upon adding a new enum, it will be added to the list of types you can choose from when editing a column.
