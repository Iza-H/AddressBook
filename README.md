#Address Book - AngularJS Project


[Angular, Angular-Route, Karma, Jasmine, ESLint]



Address Book - it's an application web which allows to manage user contacts.



##Functionality:

The api provides:

* possibility of presentation of user contacts;
* ability to add new contacts;
* possibility to change the values.

##Architecture:
The application consists of two partes:

* first which allows to show all contacts.
* second which is used to add new contacts.

The change between them can be done using buttons located at the right top part of the page.

![](https://github.com/Iza-H/AddressBook/blob/master/resources/screenshots/buttones.png)


**Add a new contact**

This part allows to add a new contact, using the form which has below fields:

* Fast Name - *Mandatory, String, max-length 30 characters, permits only letters*
* Last Name - *Mandatory, String, max-length 30 characters, permits only letters, rows are sorted by this field*
* Email - *Mandatory, String with Email Pattern, unique value*
* Address - *Optional, String, max-length 50 characters*
* City - *Optional, String, max-length 20 characters, permits only letters*
* Zip-Code - *Optional, Number, length - 5 digits*
* Country - *Optional, String, max-length 20 charactacters, permits only letters*

Button *Create* which allows add a new value is enabled only in the case when all fields are valid. In other case there is no possibility to click on it.

![](https://github.com/Iza-H/AddressBook/blob/master/resources/screenshots/emptyNew.png)

The application can't permit to save some contact if there already exists a contact with the same *Email* in storage. Email value has to be unique. This value is using to save a contact in the Local Storage.

![](https://github.com/Iza-H/AddressBook/blob/master/resources/screenshots/creation.png)

All data is saved in the Local Storage using format *key-value*. Where the key consisits of the prefix of the application ("AB_") and an email. On the other hand - value is the object with all information about the contact saved as a String.



**List of contacts**

This part presents all contacts in the table.

![](https://github.com/Iza-H/AddressBook/blob/master/resources/screenshots/listContacts.png)

The data is divided into columns:

* Fast Name
* Last Name
* Email
* Address
* City
* Zip-Code
* Country

Values are loaded from the Local Storage. The api looks for all keys which have at the beginning of the key the "AB_" prefix and presents them respectively in the table.

At the end of every row there are also located two buttons, which give the user additional possibilities:

* Edit button to update the data,

After selecting this value - all cells of the row become editable. There are valid all the validations like during the normal process of the creation of the contact. So if some field isn't valid - the *Save* button isn't available. The user also has an option to cancel the changes done by him using the button *Cancel*.

![](https://github.com/Iza-H/AddressBook/blob/master/resources/screenshots/editableList.png)

* Delete button

Using this option the api removes the value from the Storage and does the update of the table.

##Technical structure
The api was written using AngularJS (1.4.7), JavaScript, HTML5 and CSS3. It uses ESLite to clean the code.

The project contains:

* index.html - the main file html
* scripts/app.js - script with a declaration of url routes
* views/ - folder with all views used in the api
* scripts/constants - js file with properties
* scripts/controlles - all controllers
* scripts/directives - directive that is used to the creation of the rows of the table
* services/services - file with backend for the controllers
* style/ - folder with a css file
* resources/ - all additional files likes icons
* tests - dir with tests TDD



##Tests

In order to do test TDD of the app will be used Karma and Jasmine. To run them will be used:

* npm test

or

* karma start karma.conf.js



##Future
The next step in the development of this api will be change all popups that are used actually (the standard alerts) to more elegant popups which allow to lead more advanced interactions with user (like asking if the user really wants to delete some contact etc). For this purpose will be used ngDialog library.
