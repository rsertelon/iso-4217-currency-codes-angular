## ISO 4217 for Angular JS

This project is an ISO 4217 (Currency codes) module for AngularJS. It provides:

* A service (factory) that gives access to all currency codes
* A filter to print currency codes as their name (EUR -> Euro)
* A validation directive to validate currency codes

>Note: in the currency information, country codes follow the ISO 3166 standard. Here is [another library](http://rsertelon.github.io/iso-3166-country-codes-angular) to work with them

## Get it

This library is available with the bower package manager, you can either:

* Execute the following command: `bower install iso-4217-currency-codes-angular --save`
* Add this line in your dependencies: `"iso-4217-currency-codes-angular": "1.0.1"`

## Features

### Factory

You can have access to currency codes information and two utilitary methods.

```javascript
// Declare the factory as dependency
angular.module('myApp')
  .controller('MyCtrl', function (ISO4217) {
    // Test if a value is a currency code
    console.log(ISO4217.isCurrencyCode('EUR')); // true
    console.log(ISO4217.isCurrencyCode('TEST')); // false

    // Get currency information
    console.log(ISO4217.getCurrencyInfo('EUR'));
    // {
    //   'name': 'Euro',
    //   'countries': ['AX', 'AD', 'AT', 'BE', 'CY', 'EE', 'FI', 'FR', 'GF', ... ]
    // }

    // Direct access to the data
    console.log(ISO4217.codeToCurrency);
    // {
    //   'EUR': {
    //     'name': 'Euro',
    //     'countries': ['AX', 'AD', 'AT', 'BE', 'CY', 'EE', 'FI', 'FR', 'GF', ... ]
    //   },
    //   ...
    // }
  });
```

### Filter

If you get currency codes from your REST server, you can print its name with the provided filter:

```html
<!-- if currencyCode is 'EUR', will print 'Euro' -->
<p>{{currencyCode | isoCurrency }}</p>
```

### Validation directive

If you want users to enter currency codes, you can validate it like so (it fits in Angular validation process):

```html
<form name="form" novalidate>
  <input type="text" name="currencyField" currency-code />
  <span ng-show="form.currencyField.$error.currencycode">This must be a currency code!</span>
</form>
```

## Issues, Feature request

You can use [Github's issues](https://github.com/rsertelon/iso-4217-currency-codes-angular/issues) to submit feature requests and bug reports.

## Contributions

This project gladly accepts contributions. However, you must agree to give your work explicitely to public domain. To do so, just put this statement in the pull request definition:

```
I dedicate any and all copyright interest in this software to the
public domain. I make this dedication for the benefit of the public at
large and to the detriment of my heirs and successors. I intend this
dedication to be an overt act of relinquishment in perpetuity of all
present and future rights to this software under copyright law.
```

## License

This software is given to the public domain. For more information, see the `UNLICENSE` file.
