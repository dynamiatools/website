---

layout: page
---

# AbstractListToJsonConverter

To convert a string list to JSON format, dynamia tools offers us the AbstractListToJsonConverter class.

# Simple Implementation

```java
public class AddressToJsonConverter extends AbstractListToJsonConverter
{
public AddressToJsonConverter() {
     super(Address.class); 
     } 
}
```
