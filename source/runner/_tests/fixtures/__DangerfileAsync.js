const asyncAction = () =>
	new Promise(res => {
		console.log('HERE BEFORE TIMEOIUT')
		setTimeout(() => {
			console.log('HERE IN TIMEOIUT')

			warn("Async Function")
			res()
		}, 50)
	})

schedule(async () => {
	console.log('HERE SCHEDULE')

	await asyncAction()

	console.log('HERE AFTER SCHEDULE')

	warn("After Async Function")
})
