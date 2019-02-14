import { Selector } from 'testcafe';

fixture `Testing Simple Button`
    .page `../index.html`;

test('Check page starts out with hello', async t => {
  await t
      .expect(Selector('#text').innerText).eql('Hello');
});

test('Check button click changes text to goodbye', async t => {
  await t
      .click('#button')
      .expect(Selector('#text').innerText).eql('Goodbye');
});

