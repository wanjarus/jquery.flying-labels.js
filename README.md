# Flying-labels for html-forms
The first version of a plugin, which will help you to make flying-labels on html-forms.
# How in works? 
Imagine that you have a simple text field with a some placeholder:
```bush
<input type='text' name='field' placeholder='Placeholder text'>
```
After connecting a plugin, write the type:
```bush
<script>
  $("input").fly()
</script>
```
