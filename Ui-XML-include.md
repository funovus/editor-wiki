<div id="toc" markdown="1">
- [Ui XML Reference\include](#ui-xml-referenceinclude)
  * [name](#name)

</div>

***

# [Ui XML Reference](Ui-XML)\\include {ui-xml-referenceinclude}

[](overview-start)

Embed another UI definition.

#### Example Usage
[](example-usage-start)
```xml
<HStack spacing="10" padding="10" backgroundImage="frame01_blue" reverse="true">
    <include name="include" />
    <include name="include" />
    <include name="include" />
</HStack>

<!-- A separate UI element named 'include' -->
<Frame height="100" width="100" backgroundImage="cart" />
```
This XML produces the following UI:
![image](https://user-images.githubusercontent.com/34138206/149568768-b35ffadd-fd0c-4192-8010-ef2eedb3c1ef.png)

[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- None.
[](extra-section-end)

[](overview-end)

Embed another UI definition

## [](include.name)name {name}
**Value type: `string`**

[](manual-wiki-start)

#### Description
[](description-start)
The name of the UI to embed.
[](description-end)

#### Example Usage
[](example-usage-start)
```xml
<HStack spacing="10" padding="10" backgroundImage="frame01_blue" reverse="true">
    <include name="include" />
    <include name="include" />
    <include name="include" />
</HStack>

<!-- A separate UI element named 'include' -->
<Frame height="100" width="100" backgroundImage="cart" />
```
[](example-usage-end)

[](extra-section-start)
#### Related Trigger Function(s):
- None.
[](extra-section-end)

[](manual-wiki-end)

