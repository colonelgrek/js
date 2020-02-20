'use strict'
let headings = document.querySelectorAll('h2');
for(let i = 0, len=headings.length; i < len; i++) {
    let heading = headings[i];
    heading.id = 'TOC'+i;
    let link = document.createElement('a');
    link.href = '#TOC' + i;
    link.innerHTML = heading.innerHTML;
    let entry = document.createElement('li');
    entry.className = 'contents';
    entry.append(link);
    document.querySelector('main ul').append(entry);
}
