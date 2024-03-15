function toggleForm(formId) {
    var forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
      if (form.id === formId) {
        form.classList.add('active');
      } else {
        form.classList.remove('active');
      }
    });
  };