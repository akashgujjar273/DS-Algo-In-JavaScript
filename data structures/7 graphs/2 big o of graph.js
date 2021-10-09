//we r gonna use same diagram in adjacency matrix and list and we r gonna look at space complexcity of both odf these

//in matrix we r sotring verything that a is not connected with 01001
//in list we r only stroing those edges that are connected with a=b,e
//adding a vertex
// v=vertex e= edges

//space compexcity
//matrix o(v^2) 5*5=25
//list 0(v+e)

//time complexcity
// matrix=o(v^2) because we literally had to create a new row like a new matrix
//list=o(1) only add it to end

//if we wanna create an edge between b and new vortex
//on both then it will be 0{1}
//we only changed the value in both of them and it was only one operation in other places 

//removing an edge
//matrix=o(1)
//list=o(e) number of edges we have to go through we r loop 

//removing an vertex
//matrix=o(v^2)
//list=o(v+e) we have to loop through all the vertex and check if it had any edges withat removed vertex
//if its bidirectional then it might be effiecient for list