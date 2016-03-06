var assert = require('assert');

describe('Attendee', function () {
  it('is a user');
  it('has a destination');
});

describe('Driver', function () {
  it('has a number of seats');
  it('has events');
});

describe('Event', function () {
  it('has a location');
  it('has a queue of attendees and groups that are leaving');
  it('does not allow attendees to be in the queue and a queued group at the same time');
});

describe('Group', function () {
  it('has attendees');
  it('has a number of attendees');
});

describe('Location', function () {
  it('has a name');
  it('has an address');
});

describe('User', function () {
  it('has a name');
});
