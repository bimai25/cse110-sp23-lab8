// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('valid phone number #1', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});

test('valid phone number #2', () => {
    expect(functions.isPhoneNumber("(123) 456-7890")).toBe(true);
});

test('invalid phone number #1', () => {
    expect(functions.isPhoneNumber("12-34-56")).toBe(false);
});

test('invalid phone number #2', () => {
    expect(functions.isPhoneNumber("(123)-456-(7890)")).toBe(false);
});

test('valid email #1', () => {
    expect(functions.isEmail("anybody@ucsd.edu")).toBe(true);
});

test('valid email #2', () => {
    expect(functions.isEmail("england@uk.eu")).toBe(true);
})

test('invalid email #1', () => {
    expect(functions.isEmail("this@domain@ucsd.edu")).toBe(false);
});

test('invalid email #2', () => {
    expect(functions.isEmail("no email is here")).toBe(false);
});

test('valid password #1', () => {
    expect(functions.isStrongPassword("a12_")).toBe(true);
});

test('valid password #2', () => {
    expect(functions.isStrongPassword("a1234567890____")).toBe(true);
});

test('invalid password #1', () => {
    expect(functions.isStrongPassword("1235")).toBe(false);
});

test('invalid password #2', () =>{
    expect(functions.isStrongPassword("a6783?8g2")).toBe(false);
});

test('valid date #1', () => {
    expect(functions.isDate("3/05/2004")).toBe(true);
});

test('valid date #2', () => {
    expect(functions.isDate("03/5/2004")).toBe(true);
});

test('invalid date #1', () => {
    expect(functions.isDate("03052004")).toBe(false);
});

test('invalid date #2', () => {
    expect(functions.isDate("03/05/25")).toBe(false);
});

test('valid hexcode #1', () => {
    expect(functions.isHexColor("#AA3")).toBe(true);
});

test('valid hexcode #2', () => {
    expect(functions.isHexColor("#AAA333")).toBe(true);
});

test('invalid hexcode #1', () => {
    expect(functions.isHexColor("#AFH")).toBe(false);
});

test('invalid hexcode #2', () => {
    expect(functions.isHexColor("#AA%")).toBe(false);
});