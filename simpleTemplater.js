template = '<div class="name"> {{ name }} </div>'

templateData = {
    name: "lol"
};

template = template.replace(/\{\{([^\}]+)\}\}/g, function(matched, value) {
    value = value.trim();
    return templateData[value]
});
