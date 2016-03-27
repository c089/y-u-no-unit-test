Y U NO UNIT TEST?!?!
====================

Usage
-----

Violating unit testing principles can lead to situations like this:

```
$ npm test
All tests passed

$ npm test
Test A failed (some surprising failure here)

$ npm test
All tests passed

$ npm test
Test B failed (some surprising failure here)
```

What I would envision to be possible with this module would be something closer
to this:

```
$ npm test -- --enfore-unit-test
Test A failed with Exception:

  Tried to calls `fs.readFile` with arguments: '~/.global_state'

Test B failed with Exception:

  Tried to calls `fs.writeFile` with arguments: '~/.global_state'

$ npm test -- --enfore-unit-test
Test A failed with Exception:

  Tried to calls `fs.readFile` with arguments: '~/.global_state'

Test B failed with Exception:

  Tried to calls `fs.writeFile` with arguments: '~/.global_state'
```

Rationale
---------

It is surprisingly hard to precisely define what a "unit test" is. For this
reason I usually use Michael Feathers' definition of what certainly is NOT a
unit test instead:

> A test is not a unit test if:
> 
> * It talks to the database
> * It communicates across the network
> * It touches the file system
> * It can't run at the same time as any of your other unit tests
> * You have to do special things to your environment (such as editing config
>   files) to run it.

[Source](http://www.artima.com/weblogs/viewpost.jsp?thread=126923)

I believe that we can automatically detect many instances of the first three
violations: The system under test should not cause any I/O while executing unit
tests.

Status
------

Proof of concept. I'm trying to find out wether this works. Please let me know
what you think.
