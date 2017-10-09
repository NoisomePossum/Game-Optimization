({
    baseUrl: '.',
    out: 'build/main.js',
    include: [
        'libs/almond.js',
        'src/main.js'
        // 'requireConfig.js'
    ],
    wrap: true,
    paths: {
		"jquery" : "libs/jquery/jquery.min",
		"jquery-ui" : "libs/jquery-ui/jquery-ui.min",
		"howler" : "libs/howler.min",
		"underscore" : "libs/underscore-min",
		"pathfinding" : "libs/pathfinding-browser.min",
		"stats" : "libs/debug/stats.min",
		"datgui" : "libs/debug/dat.gui.min"
    }
})
