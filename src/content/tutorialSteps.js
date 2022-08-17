const tutorial = [
	{
		header: "Let's introduce you to News Box",
		body: 'News Box is a simple news reader for your phone. It will show you the latest news from the NYT. News Box is a school project build in React',
		component: 'false',
	},
	{
		header: 'News feed',
		body: "In the news feed you'll see the latest news from the NYT. Every article is automatically sorted into categories. You can click on the category to see the articles in that category. You can also click on the article to see the full article on NYT. Swipe the article left to save it to your archive.",
		component: 'section',
	},
	{
		header: 'Archive',
		body: 'You access your archive by clicking on the Archive button in the top left corner. Here you can see all the articles you saved to your archive. You can click on the article to see the full article on NYT. Swipe the article left to delete it from your archive.',
		component: 'false',
	},
	{
		header: 'Settings',
		body: 'You can access the settings by clicking on the Settings button in the top right corner. Here you can choose the categories you want to see in the news feed. You can also set the app to light/dark mode.',
		component: 'toggle',
	},
];

export default tutorial;
