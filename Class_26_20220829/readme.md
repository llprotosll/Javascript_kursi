https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbytagname/
https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbyclassname/
https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/

Uzdevums:
izpētīt atribūtus
[attribute]
[attribute=value] The attribute has this exact value.

[attribute~=value] The attribute has this value in a space-separated list.
Matches elements with an attribute name of attr whose value is exactly value, or elements with an attr attribute containing one or more values, at least one of which matches value.

[attribute|=value] The first attribute value in a dash-separated list.
will select list items with a attr-years value of "1990-2000", but not the list item with a attr-years value of "1900-1990".

[attribute^=value] The attribute starts with this value.
Matches any elements with an attribute name of attr whose value has the substring value at the start of it. eg li[class^=”message-”]

[attribute$=value] The attribute ends with this value.

Matches any elements with an attribute name of attr whose value has the substring value at the end of it. For example, a[href$="pdf"] selects every link that ends with .pdf.

[attribute*$*=value]