'use strict';

function adapt(item) {
    return Object.assign(item, {
        id: +item.id,
        type: +item.type
    });
}

module.exports = { adapt }
