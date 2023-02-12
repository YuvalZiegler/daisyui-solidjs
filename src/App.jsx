const App = () => {
  return (
    <>
      <div class="p-6 bg-slate-300 min-h-screen">
        <div class="p-6 flex flex-col gap-6 bg-slate-100 rounded-md drop-shadow-lg">
          <article class="prose">
            <h1>
              Garlic bread with cheese:{' '}
              <span class="font-light block">What the science tells us</span>
            </h1>
            <p>
              For years parents have espoused the health benefits of eating
              garlic bread with cheese to their children, with the food earning
              such an iconic status in our culture that kids will often dress up
              as warm, cheesy loaf for Halloween.
            </p>
            <p>
              But a recent study shows that the celebrated appetizer may be
              linked to a series of rabies cases springing up around the
              country.
            </p>
          </article>

          <Button type="submit">Ummmm...</Button>
        </div>
      </div>
    </>
  );
};

function Button(props) {
  return (
    <button class="btn w-48 rounded-none btn-accent">{props.children}</button>
  );
}

export default App;
