const assert = (isTrue, error) => {
    if (isTrue) {
        return
    } else {
        throw new Error(error)
    }
}

const assertEqual = (item1, item2, error) => {
    if (item1 == item2) {
        return
    } else {
        throw new Error(error)
    }
}

const assertStrictEqual = (item1, item2, error) => {
    if (item1 === item2) {
        return
    } else {
        throw new Error(error)
    }
}

const assertNotStrictEqual = (item1, item2, error) => {
    if (item1 !== item2) {
        return
    } else {
        throw new Error(error)
    }
}

module.exports = {
    assert,
    assertEqual,
    assertStrictEqual,
    assertNotStrictEqual
}