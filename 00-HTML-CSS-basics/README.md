2.3.6 How could you add weight to the global font definition to win over the classes added by point 3?


      * {
        font-size: 14px;
        font-family: serif;
        font-weight: 700;   
      }



2.3.7 Imagine there is a declaration like class=”oh-no-inline-styles” style=”background:red” and you need to change the background to green without changing the inline style. How could you accomplish this?

You can overwrite the inline style by using "!important" after the attibute that needs to be changed.
