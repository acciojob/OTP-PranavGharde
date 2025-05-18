document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.code');

  inputs[0].focus();

  inputs.forEach((input, index) => {
    input.addEventListener('input', (e) => {
      const value = e.target.value;
      if (value.length > 0 && /^\d$/.test(value)) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      } else {
        input.value = ''; // prevent non-digit characters
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        if (input.value === '') {
          if (index > 0) {
            inputs[index - 1].focus();
            inputs[index - 1].value = '';
          }
        } else {
          input.value = '';
        }
      } else if (e.key.length === 1 && !/^\d$/.test(e.key)) {
        e.preventDefault(); // block non-digit input
      }
    });
  });
});

