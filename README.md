Y U NO UNIT TEST?!?!
====================

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
