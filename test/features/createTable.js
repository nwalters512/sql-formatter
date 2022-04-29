import dedent from 'dedent-js';

/**
 * Tests support for CREATE TABLE syntax
 * @param {string} language
 * @param {Function} format
 */
export default function supportsCreateTable(language, format) {
  it('formats short CREATE TABLE', () => {
    expect(format('CREATE TABLE tbl (a INT PRIMARY KEY, b TEXT);')).toBe(dedent`
      CREATE TABLE
        tbl (a INT PRIMARY KEY, b TEXT);
    `);
  });

  // The decision to place it to multiple lines is made based on the length of text inside braces
  // ignoring the whitespace. (Which is not quite right :P)
  it('formats long CREATE TABLE', () => {
    expect(
      format('CREATE TABLE tbl (a INT PRIMARY KEY, b TEXT, c INT NOT NULL, doggie INT NOT NULL);')
    ).toBe(dedent`
      CREATE TABLE
        tbl (
          a INT PRIMARY KEY,
          b TEXT,
          c INT NOT NULL,
          doggie INT NOT NULL
        );
    `);
  });
}
