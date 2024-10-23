let isText = true;

    document.getElementById('switchButton').addEventListener('click', function() {
      const textContainer = document.querySelector('.text');
      if (isText) {
        const listItems = [
          'Norsk – Morsmål',
          'Farsi – Morsmål',
          'Engelsk – Flytende',
          'Python - Grunnleggende',
          'JS - Grunnleggende',
          'HTML & CSS - Mellomliggende',
        ];

        const ul = document.createElement('ul');
        listItems.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });

        textContainer.innerHTML = '';
        textContainer.appendChild(ul);
        textContainer.classList.add('list-container');
      } else {
        textContainer.innerHTML = 'Dette året fyller jeg 16 år, og vil begi meg på enerfaringsverd. Jeg har vokst opp i Askim,som har gjort meg godt kjent med byen innbyggere. I tillegg til å trene, spille volleyball ogprogrammere, liker jeg å bruke fritiden min på å hevekunnskapen min om koding, maskinvare, bygge PC og kroppsøving.';
        textContainer.classList.remove('list-container');
      }
      isText = !isText;
    });