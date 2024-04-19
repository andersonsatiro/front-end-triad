
let information_grid = document.getElementsByClassName('information-grid')
const info_box_data = [
  {
    icon_code: 'html',
    title: 'HTML',
    text: 'Descubra 20 novos elementos HTML que aprimorarão seu web site.',
    date: '16/04/2024',
    icon_calendar_code: 'calendar-dots'
  },
  {
    icon_code: 'css',
    title: 'CSS',
    text: 'Descubra 20 novos elementos HTML que aprimorarão seu web site.',
    date: '16/04/2024',
    icon_calendar_code: 'calendar-dots'
  },
  {
    icon_code: 'js',
    title: 'JavaScript',
    text: 'Descubra 20 novos elementos HTML que aprimorarão seu web site.',
    date: '16/04/2024',
    icon_calendar_code: 'calendar-dots'
  },
]

const table_item_info = [
  {
    description: 'tag map - w3schools',
    language: 'HTML',
    tags: ['map', 'area', 'shape', 'coords']
  },
  {
    description: 'Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. of the layout.',
    language: 'JS',
    tags: ['map', 'area', 'shape', 'coords']
  },
  {
    description: 'Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. of the layout.',
    language: 'HTML',
    tags: ['map', 'area', 'shape', 'coords']
  },
  {
    description: 'Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. of the layout.',
    language: 'HTML',
    tags: ['map', 'area', 'shape', 'coords']
  },
  {
    description: 'Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. of the layout.',
    language: 'HTML',
    tags: ['map', 'area', 'shape', 'coords']
  },
  {
    description: 'Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. of the layout.',
    language: 'HTML',
    tags: ['map', 'area', 'shape', 'coords']
  },
]

const createDivWithImgBox = (box, item) => {
  const div_img = document.createElement('div')
  div_img.classList.add('box-bg-img')
  box.appendChild(div_img)

  const language_img = document.createElement('i')
  language_img.classList.add('ph-thin', `ph-file-${item.icon_code}`, 'custom-logo')
  div_img.appendChild(language_img)
}

const createDivWithTextsgBox = (box, item) => {
  const div_texts = document.createElement('div')
  div_texts.classList.add('div-texts')
  box.appendChild(div_texts)

  const h1 = document.createElement('h1')
  h1.textContent = item.title
  h1.style = 'font-weight: 600;'
  div_texts.appendChild(h1)

  const description = document.createElement('p')
  description.textContent = item.text
  description.style = 'max-width: 16rem; font-weight: 400;'
  div_texts.appendChild(description)

  const div_date = document.createElement('div')
  div_date.classList.add('box-date-div')
  div_texts.appendChild(div_date)

  const icon = document.createElement('i')
  icon.classList.add('ph-light', `ph-${item.icon_calendar_code}`, 'custom-calendar')
  div_date.appendChild(icon)

  const last_update = document.createElement('p')
  last_update.textContent = `atualizado em ${item.date}`
  last_update.style = 'max-width: 16rem; font-weight: 300;'
  div_date.appendChild(last_update)
}

info_box_data.map((item) => {
  const section = document.getElementById('information-grid')

  const box = document.createElement('div')
  box.classList.add('info_box')
  section.appendChild(box)

  createDivWithImgBox(box, item)
  createDivWithTextsgBox(box, item)
})

table_item_info.map((item) => {
  const table = document.getElementById('table')

  const tr = document.createElement('tr')
  table.appendChild(tr)

  const first_td = document.createElement('td')
  first_td.textContent = item.description
  tr.appendChild(first_td)

  const second_td = document.createElement('td')
  second_td.textContent = item.language
  tr.appendChild(second_td)
  second_td.style = 'text-align: center'

  const third_td = document.createElement('td')
  third_td.textContent = item.tags.join(', ')
  tr.appendChild(third_td)
  third_td.style = 'text-align: center'

  const fourth_td = document.createElement('td')
  tr.appendChild(fourth_td)
  fourth_td.style = 'text-align: center'

  const view = document.createElement('i')
  view.classList.add('ph', 'ph-arrow-line-up-right', 'table-item-p', 'view-icon')
  fourth_td.appendChild(view)
})
