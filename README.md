# Custom Select Component 
Team Genki's entry for the Chakra UI Hackathon

### Usage

Our component is used similarly to the native html select we're all familiar with.

```typescript
import { Select, Button } from "./Select";
import { Container } from "@chakra-ui/react";

function Example() {
  return (
  <Container>
    <Select>
       <Option value="1">one</Option>
       <Option value="2">two</Option>
       <Option value="6">six</Option>
       <Option value="8">eight</Option>
       <Option value="9">elephant</Option>
       <Option value="5">five</Option>
     </Select>
  </Container>
  )
}

```

### Variants and Sizes
The select component has outlined, filled, flushed and unstyled variants and sm, md and lg sizes.
Example:

```typescript
<Select size="lg" variant="flushed">
  <Option value="1">one</Option>
  <Option value="2">two</Option>
  <Option value="6">six</Option>
  <Option value="8">eight</Option>
  <Option value="9">elephant</Option>
  <Option value="5">five</Option>
</Select>
```


### Props
You can also use props like readOnly, isDisabled, hideLabel, isInvalid on the Select Component

```typescript
<Select size="lg" readOnly hideLabel>
  <Option value="1">one</Option>
  <Option value="2">two</Option>
  <Option value="6">six</Option>
  <Option value="8">eight</Option>
  <Option value="9">elephant</Option>
  <Option value="5">five</Option>
</Select>
```

### Overriding Styles
You can easily override the style of the select-button, select-listbox or select-label by passing an object into `labelStyle, buttonStyle, listBoxStyle` props. For example if I wanted to make the select button have an orange background, the listbox have a red border and make the label yellow, I'll write:

```typescript
<Select 
  size="lg" 
  label="Choose Option" 
  buttonStyle={{
    backgroundColor: "orange"
  }}
  listBoxStyle={{
    borderColor: "red"
  }}
  labelStyle={{
    color: "yellow"
  }}
>
  <Option value="1">one</Option>
  <Option value="2">two</Option>
  <Option value="6">six</Option>
  <Option value="8">eight</Option>
  <Option value="9">elephant</Option>
  <Option value="5">five</Option>
</Select>
```
### Accessibility and form support
To make the custom select accessible you need to specify the `label` prop. You can choose to hide the label if you want by using `hideLabel`

```typescript
<Select 
  label="Choose Option"
  hideLabel
>
  <Option value="1">one</Option>
  <Option value="2">two</Option>
  <Option value="6">six</Option>
  <Option value="8">eight</Option>
  <Option value="9">elephant</Option>
  <Option value="5">five</Option>
</Select>
```
### Typeahead
The custom select has a typeahead feature. Press the first letter of the option you're looking for to snap to the option.

