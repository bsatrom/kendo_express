(function() {

  require(['../lib/kendo.all.min'], function(kendo) {
    $('#autocomplete').kendoAutoComplete(["Brandon", "Burke", "John"]);
    return this;
  });

}).call(this);
