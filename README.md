# OkCupid Take-Home Exercise

## Architecture
Made a separate container for `About` because that was a logic heavy component. What happened in that component affected the rest of the app.

I was deciding on making `Essay` its own container for slightly less prop-drilling, but that logic was more about showing the preview essay/setting up the text for the `Edit` screen, so fairly self-contained. If I had more time, maybe I'd combine the Essay/Edit components in some way.

All styles are in `App.scss` since it's such a small app, otherwise I'd create separate styles for each component when necessary within separate folders for each feature of the app.

Also, in my attempt to not over-think the naming (fields/preview-text/template, essay, etc) of vars/components, I tried to keep it simple.


## Problems
The trickiest part was the bold field answer. At first I thought a simple `str.replace` would do it, but remembered it won't work with an html tag (`<b>`). Then it was fun remembering I had to revert that array/jsx back to a string for the edit portion :).  

## Summary
This was a fun and challenging feature. I enjoyed playing with the madlibs at end.
