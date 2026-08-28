(function (){
    const url = new URL(window.location.href);

      if (url.pathname === '/search') {
          if (url.searchParams.get('q')?.includes("definition"))
              console.log("lalallala lallala")
      }

})