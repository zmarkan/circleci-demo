import { Selector } from 'testcafe';

fixture `Testing Simple Button`
    .page `../index.html`;

test('Check page starts out with correct header', async t => {
  await t
      .expect(Selector('#header').innerText).eql('Sample Header');
});

