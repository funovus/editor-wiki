<div id="toc" markdown="1">
- [Ui XML Reference\Constant](#ui-xml-referenceconstant)
  * [name](#name)
  * [value](#value)

</div>

***

# [Ui XML Reference](Ui-XML)\\Constant {ui-xml-referenceConstant}

[](overview-start)

Defines a constant value that can be used in attributes. Constants do not require binding and are referenced by prefixing a '@' to their name.

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" frameImage="frame01_blue" >
    <Constant name="image" value="cart" />
    <Frame frameImage="@image" height="200" width="200" />
</Frame>
```
This XML produces the following UI:
![image](https://user-images.githubusercontent.com/34138206/149584423-6fad7ce3-45d9-4504-8c80-50fb983cae2b.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- [GetXmlConstant()](Trigger-API-Reference-DCEI-Functions-Custom-UI#getxmlconstant-1)
[](extra-section-end)

[](overview-end)

Define a constant value that can be used in attributes

**This frame doesn't support common attributes.**

## [](Constant.name)name {name}
**Value type: `string`**

[](manual-wiki-start)

#### Description
[](description-start)
The name of the constant.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" frameImage="frame01_blue" >
    <Constant name="image" value="cart" />
    <Frame frameImage="@image" height="200" width="200" />
</Frame>
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- None.
[](extra-section-end)

[](manual-wiki-end)

## [](Constant.value)value {value}
**Value type: `string`**

[](manual-wiki-start)

#### Description
[](description-start)
The value of the constant.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<Frame layout="flex" frameImage="frame01_blue" >
    <Constant name="image" value="cart" />
    <Frame frameImage="@image" height="200" width="200" />
</Frame>
```
[](example-usage-end)

[](extra-section-start)

[](extra-section-end)

[](manual-wiki-end)

