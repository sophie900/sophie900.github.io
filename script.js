const template = document.createElement('template');

template.innerHTML = `
  <footer>
    <a href="https://github.com/sophie900" target=”blank” class="footer_link">Github </a>&bull;
    <a href="mailto: sophie.rong@gmail.com" target=”blank” class="footer_link">Gmail </a>&bull;
    <a href="https://discord.com/users/833526125807796234" target=”blank” class="footer_link">Discord</a>
  </footer>
`;

document.body.appendChild(template.content);