function anagram(el){
	if (el.src.match("images/a.png")){
		el.src = "images/e.png";	
	} else if (el.src.match("images/e.png")){
		el.src = "images/p.png";
	} else if (el.src.match("images/p.png")){
		el.src = "images/o.png";
	} else if (el.src.match("images/o.png")){
		el.src = "images/b.png";
	} else if (el.src.match("images/b.png")){
		el.src = "images/i.png";
	} else if (el.src.match("images/i.png")){
		el.src = "images/m.png";
	} else if (el.src.match("images/m.png")){
		el.src = "images/r.png";
	} else if (el.src.match("images/r.png")){
		el.src = "images/n.png";
	} else if (el.src.match("images/n.png")){
		el.src = "images/y.png";
	} else if (el.src.match("images/y.png")){
		el.src = "images/h.png";
	} else if (el.src.match("images/h.png")){
		el.src = "images/space.png";
	} else if (el.src.match("images/space.png")){
		el.src = "images/d.png";
	} else if (el.src.match("images/d.png")){
		el.src = "images/s.png";
	} else if (el.src.match("images/s.png")){
		el.src = "images/a.png";
	} else {
		// do nothing
	}
}