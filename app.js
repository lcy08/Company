
const heading = document.querySelector(".head-container")

onscroll = () => {
  if (heading.offsetTop > 500) {
    heading.style.color = "#0F1035"
  } else {
    heading.style.color = ""
  }
}
