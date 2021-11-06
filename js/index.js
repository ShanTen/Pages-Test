function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

//for now only removes the markers 
function FormatContent(unformattedContent){

    let str = unformattedContent;
    
    const startMarker = "<-$"
    const endMarker = "$->";

    var startIndices = getIndicesOf(startMarker,str,false);
    var endIndices = getIndicesOf(endMarker,str,false);

    let posts = [];

    for(i of startIndices) {
        startIndex = i+startMarker.length;
        endIndex  = endIndices[startIndices.indexOf(i)];

        // console.log(startIndex);
        // console.log(endIndex);

        var post = str.substring(startIndex,endIndex)
        posts.push(post)
    }
    
    return posts;
}

function main(){
    
    //trust me I tried to load it from a text file directly, I TRIED SO HARD AND GOT SO FAR
    //IN THE END STACKOVERFLOW TOLD ME TO MAKE A WHOLE SERVER SIDE >:|
    //just collapse this part if you're working on it for your own sanity
    var blogContent =  ` 
<-$<b><u>Blog 1</u></b><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit
Suspendisse posuere ipsum in odio pharetra, non sodales eros rhoncus
Proin tempor ante libero, sed aliquam justo hendrerit quis
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
Nunc diam tellus, commodo vitae nunc a, commodo scelerisque augue
Integer nec suscipit mi, condimentum malesuada neque
Nunc aliquet placerat est, nec feugiat lorem gravida vitae
Integer quis malesuada sem
Praesent rutrum elit ac lectus euismod, id eleifend odio consectetur
Nullam vulputate et risus at aliquet
Suspendisse at blandit elit
Vestibulum efficitur enim metus, sit amet hendrerit metus ultrices quis
Maecenas vel nunc auctor, aliquet ligula nec, gravida sapien
Vivamus tristique arcu et lectus dapibus, in condimentum nisl ullamcorper
Nulla eget augue ullamcorper, sagittis purus quis, cursus mauris
Curabitur at arcu id urna porttitor sollicitudin
Mauris cursus finibus eleifend.$->

<-$<b><u>Blog 2</u></b><br>
Vestibulum tempor rhoncus tempus
Curabitur vitae massa pretium, ullamcorper risus quis, dignissim nunc
Quisque elit ligula, congue nec luctus vitae, sollicitudin at turpis
Nam volutpat urna risus, id rutrum ex dapibus nec
Nam quis justo malesuada, imperdiet augue nec, consectetur quam
Mauris sed justo a felis egestas ultrices vitae ac massa
Donec vehicula ligula consectetur erat vulputate, vel maximus mi finibus
Suspendisse quis velit ut leo auctor rhoncus non non libero
Curabitur fringilla ex id eleifend congue
Quisque eleifend dictum consequat
Nam venenatis lacinia nibh nec venenatis
Morbi non ullamcorper dui, ac molestie arcu
Sed pellentesque nisl a arcu volutpat, vel tincidunt dui vehicula
Praesent in quam ante
Duis in mi eget lectus accumsan pulvinar.$->

<-$<b><u>Blog 3</u></b><br>
LMFAO THIS ACTUALLY WORKED AHAHAHAH$->
`
    var formattedContent = FormatContent(blogContent)    
    var toLoad = document.getElementsByClassName("blogPart")[0]
    for(x of formattedContent){ //change this into a blog posts class and ID it according to title/date 
        toLoad.innerHTML += `<p class = "Loaded">${x}</p><br><br>`;
    }
    
}

main();
