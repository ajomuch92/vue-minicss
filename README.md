# Vue Minicss
![alt Vue Minicss Logo](https://i.ibb.co/bgjC8Tf/Grupo-1.png)
## A components progressive library base on [minicss.org](https://minicss.org/) for Vuejs. 
The documentation and examples are being building [here](https://vueminicss.netlify.app/). Best and new components and features are coming. Feel free to make a pull request.

## Author

This library is created by [Aarón Montes](https://github.com/ajomuch92 "Aarón Montes"). **Support me to improve and maintain this library. My first month goal is only $50:**
<a href="https://www.buymeacoffee.com/ajomuch92" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

# Instalation

NPM:  
```bash
npm install --save vue-minicss
```
Import in your main.js (or index.js) file and install it:

```javascript
// ES6
...
import VueMiniCss 'vue-minicss';

Vue.use(VueMiniCss);
...
```
# Components

**Note**: All the components can receive the class, style or id as props.

## Accordion

A component to show expandables items.
**Usage**
```html
...
<m-accordion :items="items" />
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
| items  | Array of string or object containing the definition of  the expandable items. E.g. ['Item 1', 'Item 2'...] or [{name: 'item1', label : 'Item 1'}] | True   |   |
|  expandAll |   Boolean to indicate if it's possible to expand all items at same time | False   |   false |

**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  *name* or *label* |  Slots with the name or label of the item to customize the item shown when expand |


## Box Colored

A component to display a blue box that occupies the entire available width.

**Usage**

```html
...
<m-box-colored  />
...
```

## Button

Component to render a clickable button

**Usage**
```html
...
<m-button>
	...
</m-button>
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
| inverse  | Boolean to indicate when button is dark | False   | false   |
| color  | String to set button color. Values allowed are primary, secondary or tertiary | False   |    |
|  size |   String to indicate the button size. Small and large are allowed values | False   |    |
|  hoverEffect |   Boolean to indicate a little effect when over the button | False   |   true |
|  shadowed |   Boolean to indicate when button is shadowed | False   |   false |
|  rounded |   Boolean to indicate when button has rounded edges | False   |   false |
|  circular |   Boolean to indicate when button is rounded or eliptical | False   |   false |
|  bordered |   Boolean to indicate when button has a border | False   |   false |
|  loading |   Boolean to indicate when button is loading. Show a spinner when is true | False   |   false |
|  disabled |   Boolean to indicate when button is disabled | False   |   false |
|  width |   Integer number to set the button with | False   |   75 |


**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slots by default |

**Events**

|  Name | Description   |
| ------------ | ------------ |
|  Click |  Event triggered when click |

## Cards

### Card Section

Component to use into cards to separate content.

**Usage**
```html
...
<m-card-section>
	...
</m-card-section>
...
```

**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |

### Card

Component to render a card.

**Usage**
```html
...
<m-card>
	...
</m-card>
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  size |   String to indicate the card size. Small and large are allowed values | False   |    |
|  variant |   String to indicate the card status. Values allowed are error and warning | False   |    |
|  fluid |   Boolean to indicate when its width based on the column that contains them |


**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |

## Drawer

Component to show a drawer and its button into the screen.

**Usage**
```html
...
<m-drawer>
	...
</m-drawer>
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  id |   String to unique identify the drawer | True   |    |
|  persistent |  Boolean to indicate when the drawer will be on right side. Otherwise, will render the drawer over the trigger button | False   |  true  |


**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |

## Dropdown

Component to show a dropdown menu over a component.

**Usage**
```html
...
<m-dropdown>
	....
	<template name="dropdown">
		...
	</template>
</m-dropdown>
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  hover |   Boolean value to indicate when dropdown is show on hover event | False   |   true |


**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |
|  dropdown |  Slot to place the body of dropdown menu |

## Grid

### Contanier
Component to define a default container

**Usage**
```html
...
<m-container>
	...
</m-container>
...
```

**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |

### Row
Use to define a new row on a grid design

**Usage**
```html
...
<m-row>
	...
</m-row>
...
```

**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |

### Cols
Use to define a new column on a grid design

**Usage**
```html
...
<m-col>
	...
</m-col>
...
```
**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  sm |   String or integer number to indicate the number of row on a small screen | False   |   |
|  md |   String or integer number to indicate the number of row on a medium screen | False   |   |
|  lg |   String or integer number to indicate the number of row on a large screen | False   |   |
|  smOffset |   String or integer number to indicate the offset for a row on a small screen | False   |   |
|  mdOffset |   String or integer number to indicate the offset for a row on a medium screen | False   |   |
|  lgOffset |   String or integer number to indicate the offset for a row on a large screen | False   |   |

**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |

## Header & Footer

### Header

Component to show a header navbar.

**Usage**
```html
...
<m-header>
	....
	<template name="logo">
		...
	</template>
</m-header>
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  sticky |   Boolean value to indicate when header is sticky | False   |   false |


**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |
|  logo |  Slot to place a logo on header |

### Footer

Component to show a footer bar.

**Usage**
```html
...
<m-footer>
	...
</m-footer>
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  sticky |   Boolean value to indicate when footer is sticky | False   |   false |


**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |

## Highlight

Component to higlight a component (usually text).

**Usage**
```html
...
<m-highlight>
	...
</m-highlight>
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  tag |   Boolean value to indicate when highlight is a tag. A tag means rounded corners | False   |   false |
|  inline |   Boolean value to indicate when highlight is inline with the rest of text | False   |   false |
| color  | String to set highlight color. Values allowed are primary, secondary or tertiary | False   |    |


**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |

## Icons

Component to show an icon. Its's based on Feather Icons. You can find the whole list of icons [here](https://feathericons.com/ "here").

**Usage**
```html
...
<m-icon name="icon-name">
	...
</m-icon>
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  name |   String to indicate the icon to show | True   |    |
|  width | Integer number to indicate the icon width | False   |  24  |
|  height | Integer number to indicate the icon height | False   |  24  |
|  color | String (with an hexadecimal value) to indicate the icon color | False   |  #000000  |

## Images

### Images
Component to show images

**Usage**
```html
...
<m-image :src="src">
	...
</m-image>
...
```
**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  src |   String to indicate the source of the image | True   |   |
|  alt |   String to define an alternative text for the image | False   |   |
|  caption |   String to define a footer image text | False   |   |
|  innerClass |   String to define a class for the image HTML tag inside the component | False   |   |
|  width |   String or integer number to indicate the image width | False   |  240 |
|  height |   String or integer number to indicate the image height | False   |  240 |

### Hoverable Images
Component to show images and show and opacity when hover it.

**Usage**
```html
...
<m-hoverable-image :src="src">
	...
</m-hoverable-image>
...
```
**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  src |   String to indicate the source of the image | True   |   |
|  alt |   String to define an alternative text for the image | False   |   |
|  innerClass |   String to define a class for the image HTML tag inside the component | False   |   |
|  width |   String or integer number to indicate the image width | False   |  240 |
|  height |   String or integer number to indicate the image height | False   |  240 |
|  bodyColor |   String with an hexadecimal to indicate the body color when hover | False   |  transparent |

**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |

### Parallax
Component to show images and show and opacity when hover it.

**Usage**
```html
...
<m-parallax :src="src" />
...
```
**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  src |   String to indicate the source of the image | True   |   |
|  height |   String to define the parallax height | False   |   |


## Inputs

### Fieldset
Component to render a frame around other elements.

**Usage**
```html
...
<m-fieldset>
...
</m-fieldset>
...
```
**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  Legend |   String to put a legend or title for the frame | True   |   |

**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |

### Checkbox
Componente to show a checkbox.

**Usage**
```html
...
<m-checkbox v-model="value" :label="label">
...
</m-checkbox>
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  value |   String to indicate when the checkbox is cheked | False   |   |
|  label |   String to define the checkbox label | False   |   |
|  disabled |   Boolean to indicate when the checkbox is disabled | False   |  false |
|  form |   String to indicate the name of the form to which it belongs| False   |   |
|  name |   String to indicate the name for checkbox | False   |   |
|  readonly |  Boolean to indicate when the checkbox is readonly | False   |  false |
|  invalid |   Boolean value that indicates when the control value is invalid or required | False   |  false |

**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |

**Events**

|  Name | Description   |
| ------------ | ------------ |
|  input |  Event triggered when the checkbox value changed|

Note: You can use v-model with this component.

### File
Component to show a button and select a file from a prompt

**Usage**
```html
...
<m-file v-model="value" />
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  id |   String to indicate the unique identifier for the component | True   |   |
|  value |   String used by v-model directive to pass the base64 file string | False   |   |
|  showLabel |   Boolean to indicate when to show the name of file selected| False   |  false |
|  accept |   String to indicate the file extensions for input| False   |   |
|  small |   String to indicate when the button is small or not | False   |  true |

**Events**

|  Name | Description   |
| ------------ | ------------ |
|  input |  Event triggered when select a file |

Note: You can use v-model with this component.

### Input
Component to show a input or textbox

**Usage**
```html
...
<m-input v-model="value" />
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  value |   String or number to indicate the input value | False   |   |
|  type |   String to indicate the input type. Allowed values are text, number, email, search, password, tel and url | True   |   |
|  disabled |   Boolean to indicate when the input is disable | False   |  false |
|  form |  String to indicate the name of the form to which it belongs | False   |   |
|  max |   String or integer number to indicate the maximun for inputs type number | False   |  |
|  maxlength |  String or integer number to specify the maximum number of characters allowed on input | False   |   |
|  min |   String or integer number to indicate the minimum for type number  | False   |   |
|  minlength |   String or integer number to specify the minimum number of characters allowed on input | True   |   |
|  name |   String to specify the name of the input | False   |   |
|  pattern |   Regex used the validate the input value when submit | False   |   |
|  placeholder |   String to specify a short hint that describes the expected value of the input| False   |   |
|  readonly |   Boolean to indicate when the input is readonly | False   |   |
|  step |  String or integer number to specify the interval between legal numbers on input| False   |   |
|  invalid |   Boolean value that indicates when the control value is invalid or required. Put a red border around input | False   |   |

**Events**

|  Name | Description   |
| ------------ | ------------ |
|  blur |  Event triggered when input lost focus |
|  change |  Event triggered when input changes its value |
|  focus |  Event triggered when input got focus  |
|  keydown |  Event triggered when you press a key down |
|  keypress |  Event triggered when you press a key |
|  keyup |  Event triggered when you release a key |
|  click |  Event triggered when you click on input |
|  input |  Event triggered when input value changes |

Note: You can use v-model with this component.

### Radio
Component to show inputs type radio

**Usage**
```html
...
<m-radio v-model="value" :items="items" />
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  value |   String or number to indicate the input value | False   |   |
| items  | Array of object containing the items to render for radios.  E.g. [{id: 'id', label': 'label', value: 'value'},...]  | True   |    |
|  disabled |   Boolean to indicate when the radios are disable | False   |  false |
|  readonly |   Boolean to indicate when the radios are readonly | False   |  false |
|  invalid |   Boolean value that indicates when the control value is invalid or required. Put a red border around input | False   |   false|
|  vertical |   Boolean value to indicate when the input radios are shown vertically | False   |  false |

**Events**

|  Name | Description   |
| ------------ | ------------ |
|  change |  Event triggered when checkbox changes its value |
|  input |  Event triggered when checkbox changes its value |

Note: You can use v-model with this component.

### Select
Component to show select control

**Usage**
```html
...
<m-select v-model="value" :options="items" />
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  value |   String or number to indicate the input value | False   |   |
| options  | Array of object containing the items for select options.  E.g. [{ label': 'label', value: 'value'},...]  | True   |    |
|  disabled |   Boolean to indicate when the select control is disable | False   |  false |
|  form |  String to indicate the name of the form to which it belongs | False   |   |
|  name |   String to specify the name of the select control | False   |   |
|  readonly |   Boolean to indicate when the select control is readonly | False   |  false |
|  invalid |   Boolean value that indicates when the control value is invalid or required. Put a red border around input | False   |   false|
|  placeholder |   String to specify a short hint that describes the expected value when you make a selection| False   |   |

**Events**

|  Name | Description   |
| ------------ | ------------ |
|  change |  Event triggered when checkbox changes its value |
|  input |  Event triggered when checkbox changes its value |

Note: You can use v-model with this component.

### Textarea
Component to show a textarea

**Usage**
```html
...
<m-textarea v-model="value" />
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  value |   String or number to indicate the textarea value | False   |   |
|  disabled |   Boolean to indicate when the textarea is disable | False   |  false |
|  form |  String to indicate the name of the form to which it belongs | False   |   |
|  maxlength |  String or integer number to specify the maximum number of characters allowed on textarea | False   |   |
|  name |   String to specify the name of the input | False   |   |
|  placeholder |   String to specify a short hint that describes the expected value of the textarea| False   |   |
|  autofocus |   Boolean to indicate when the input is focused from the begining | False   |   |
|  rows |  String or integer number of rows for the texte area| False   |   |
|  cols |  String or integer number of columns for the texte area| False   |   |
|  invalid |   Boolean value that indicates when the control value is invalid or required. Put a red border around input | False   |   |

**Events**

|  Name | Description   |
| ------------ | ------------ |
|  blur |  Event triggered when textarea lost focus |
|  change |  Event triggered when textarea changes its value |
|  focus |  Event triggered when textarea got focus  |
|  keydown |  Event triggered when you press a key down |
|  keypress |  Event triggered when you press a key |
|  keyup |  Event triggered when you release a key |
|  click |  Event triggered when you click on textarea |
|  input |  Event triggered when textarea value changes |

Note: You can use v-model with this component.

## Modals

### Loading
Component to show a little loading modal over the main screen. It has a slot to put other components inside it.

**Usage**
```html
...
<m-loading :show="show">
...
</m-loading>
...
```
**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  show |   Boolean value to indicate when to show the loading modal | False   |  false |

**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |

### Modal
Component to show a modal window over main screen.

**Usage**
```html
...
<m-modal v-model="show">
...
</m-modal>
...
```
**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  value |   Boolean value to indicate when to show the modal | False   | false  |

Note: You can use v-model with this component.

**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |
|  header |  Slot to customize the modal header|

**Events**

|  Name | Description   |
| ------------ | ------------ |
|  input |  Event triggered when click on close button|

## ProgressBar

Component to show a progress bar.
```html
...
<m-spinner>
	...
</m-spinner>
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
| color  | String to set button color. Values allowed are primary, secondary or tertiary | False   |    |
| value  | String or integer number to indicate the progress bar value | False   |   0 |
| max  | String or integer number to indicate the max value for progress bar | False   |   100 |

## Spinner

Component to show a loading spinner icon
**Usage**
```html
...
<m-progress-bar>
</m-progress-bar>
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
| color  | String to set button color. Values allowed are primary, secondary or tertiary | False   |    |

## Table

Component to show a table

**Usage**
```html
...
<m-table :headers="headers" :items="items">
	...
</m-table>
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
| headers  | Array of string to indicate the table headers. E.g. ['Column 1', 'Column 2'...] | True   |    |
| items  | Array of object containing the items to render on the table. There must be a match with the table headers. E.g. [{'Column 1': value1, 'Column 2': value 2}]  | True   |    |
|  search |   String to indicate a search over the table items | False   |    |
|  horizontal |   Boolean to indicate when table will be show horizontally | False   |   false |
|  striped |   Boolean to indicate when table is striped | False   |   false |
|  hoverable |   Boolean to indicate when table has other color when hover a row | False   |   false |
|  selectable |   Boolean to indicate when is possible to select a row | False   |   false |
|  dense |   Boolean to indicate when table is dense | False   |   false |
|  noItemsText |   String to indicate a message when any items were found on a search | False   |    |



**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  title |  Slots to place a title |
|  search |  Slots to place a search textbox |
|  header-**{index}** |  Slots to customize a header. Index begins on 0 |
|  row-**{header}** |  Slots to customize a cell under a header on a row |

**Events**

|  Name | Description   |
| ------------ | ------------ |
|  item-click |  Event triggered when click on a row and it's selectable|

## Tabs

Component to render a card.

**Usage**
```html
...
<m-card>
	...
</m-card>
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  tabs |   Array of string containing the tab titles | True   |    |
|  value |   Integer number to indicate the current tab shown| False   |   0 |


**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  tab-header-**{index}** |  Slot to show the header of the N tab. By default has the tab title. Index begin on 1 |
|  tab-content-**{index}** |  Slot to show the content of the N tab. Index begin on 1 |

**Events**

|  Name | Description   |
| ------------ | ------------ |
|  Input | Event triggered when change tab|

Note: You can use v-model with this component.

## Toast

Component to show a toast message on screen bottom
**Usage**
```html
...
<m-toast>
	...
</m-toast>
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  value |   Boolean to indicate when to show toast | True   |    false |
|  timeout | Integer number to indicate the miliseconds on screen | False   |  2500  |

**Events**

|  Name | Description   |
| ------------ | ------------ |
|  Input | Event triggered when toast dissaper |

Note: You can use v-model with this component.


**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |

## Tooltip

Component to show a tooltip when pass over a HTML element or component

**Usage**
```html
...
<m-tooltip tooltip-text="My tooltip">
	...
</m-tooltip>
...
```

**Props**

|  Name | Description   | Required   | Default   |
| ------------ | ------------ | ------------ | ------------ |
|  tooltipText |   String to use as tooltip | True   |    |
|  bottom |  Boolean to indicate when tooltip is shown on bottom | False   |  false  |


**Slots**

|  Name | Description   |
| ------------ | ------------ |
|  Default |  Slot by default |


## License
MIT

