const site = window.location.hostname;

const custom_style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

function custom_tag(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag)
    custom_element.setAttribute(attr_tag, attr_name)
    custom_element.innerHTML = value
    document.body.append(custom_element)
}

custom_style(`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

    ._ak8l {
        filter: blur(4px);
    }

    
`)