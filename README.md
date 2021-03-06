# jQuery.flying-labels.js v1.0.0
# Easy flying labels for html-forms
The first version of a plugin, which will help you to make flying-labels on html-forms.<br />
Requires jQuery 3.0+.
# How it works? 
This plugin works on **text-**, **password-inputs** and **textarea**'s. <br />
Imagine that you have a simple text field with a some placeholder:
```bush
<input type='text' name='field' placeholder='Placeholder text'>
```
After connecting a plugin and css-file of a plugin, write the following code:
```bush
<script>
  $("input").fly()
</script>
```
![Image](https://github.com/VladFedotov/flying-labels/blob/master/example.jpg)

# Options

## 'wrapperClass' (default: 'it-wrapper')
Class of wrapper for input or textarea
## 'placeholderClass' (default: 'placeholder') 
Class of a flying label with placeholder text
## 'animationTime' (default: 200) 
Duration of the animation for appearance of the label. To hide the label, half duration is used.
## 'showAnimation' (default: 'slideInUp') 
Name of css-animation of appearance of the label. You can use Animate.css for this purpose.
## 'hideAnimation' (default: 'zoomOut') 
Name of css-animation of hiding of the label. You still can use Animate.css
## 'destroy'
Method for disabling the plugin and removing the labels. Usage: 
```
$("input").fly('destroy')
``` 
