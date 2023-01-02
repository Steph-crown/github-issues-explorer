import { IPaginatedResponse } from "../../interfaces";

const issues: IPaginatedResponse<
  { [key: string]: string | number | object | null | boolean }[]
> = {
  total_count: 21947,
  incomplete_results: false,
  items: [
    {
      url: "https://api.github.com/repos/Dun-sin/Whisper/issues/245",
      repository_url: "https://api.github.com/repos/Dun-sin/Whisper",
      labels_url:
        "https://api.github.com/repos/Dun-sin/Whisper/issues/245/labels{/name}",
      comments_url:
        "https://api.github.com/repos/Dun-sin/Whisper/issues/245/comments",
      events_url:
        "https://api.github.com/repos/Dun-sin/Whisper/issues/245/events",
      html_url: "https://github.com/Dun-sin/Whisper/issues/245",
      id: 1514468370,
      node_id: "I_kwDOHMJ-o85aRPQS",
      number: 245,
      title: "[FEATURE] Set up a CI/CD pipeline",
      user: {
        login: "Cor4zon",
        id: 71446920,
        node_id: "MDQ6VXNlcjcxNDQ2OTIw",
        avatar_url: "https://avatars.githubusercontent.com/u/71446920?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Cor4zon",
        html_url: "https://github.com/Cor4zon",
        followers_url: "https://api.github.com/users/Cor4zon/followers",
        following_url:
          "https://api.github.com/users/Cor4zon/following{/other_user}",
        gists_url: "https://api.github.com/users/Cor4zon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Cor4zon/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/Cor4zon/subscriptions",
        organizations_url: "https://api.github.com/users/Cor4zon/orgs",
        repos_url: "https://api.github.com/users/Cor4zon/repos",
        events_url: "https://api.github.com/users/Cor4zon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Cor4zon/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4042907854,
          node_id: "LA_kwDOHMJ-o87w-eDO",
          url: "https://api.github.com/repos/Dun-sin/Whisper/labels/enhancement",
          name: "enhancement",
          color: "a2eeef",
          default: true,
          description: "New feature or request",
        },
        {
          id: 4283885793,
          node_id: "LA_kwDOHMJ-o87_Vujh",
          url: "https://api.github.com/repos/Dun-sin/Whisper/labels/feature",
          name: "feature",
          color: "BFD4F2",
          default: false,
          description: "",
        },
        {
          id: 4645172483,
          node_id: "LA_kwDOHMJ-o88AAAABFN-1Aw",
          url: "https://api.github.com/repos/Dun-sin/Whisper/labels/assigned",
          name: "assigned",
          color: "c2e0c6",
          default: false,
          description: "",
        },
      ],
      state: "open",
      locked: false,
      assignee: {
        login: "Cor4zon",
        id: 71446920,
        node_id: "MDQ6VXNlcjcxNDQ2OTIw",
        avatar_url: "https://avatars.githubusercontent.com/u/71446920?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Cor4zon",
        html_url: "https://github.com/Cor4zon",
        followers_url: "https://api.github.com/users/Cor4zon/followers",
        following_url:
          "https://api.github.com/users/Cor4zon/following{/other_user}",
        gists_url: "https://api.github.com/users/Cor4zon/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Cor4zon/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/Cor4zon/subscriptions",
        organizations_url: "https://api.github.com/users/Cor4zon/orgs",
        repos_url: "https://api.github.com/users/Cor4zon/repos",
        events_url: "https://api.github.com/users/Cor4zon/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Cor4zon/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "Cor4zon",
          id: 71446920,
          node_id: "MDQ6VXNlcjcxNDQ2OTIw",
          avatar_url: "https://avatars.githubusercontent.com/u/71446920?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Cor4zon",
          html_url: "https://github.com/Cor4zon",
          followers_url: "https://api.github.com/users/Cor4zon/followers",
          following_url:
            "https://api.github.com/users/Cor4zon/following{/other_user}",
          gists_url: "https://api.github.com/users/Cor4zon/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Cor4zon/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Cor4zon/subscriptions",
          organizations_url: "https://api.github.com/users/Cor4zon/orgs",
          repos_url: "https://api.github.com/users/Cor4zon/repos",
          events_url: "https://api.github.com/users/Cor4zon/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Cor4zon/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 4,
      created_at: "2022-12-30T11:51:25Z",
      updated_at: "2023-01-01T19:42:30Z",
      closed_at: null,
      author_association: "CONTRIBUTOR",
      active_lock_reason: null,
      body: "### Description\n\nLet's improve a deployment process by setting up CI/CD pipeline. \n\n### Screenshots\n\n_No response_\n\n### Additional information\n\n_No response_\n\n### 👀 Have you checked if this issue has been raised before?\n\n- [X] I checked and didn't find similar issue\n\n### 🏢 Have you read the Contributing Guidelines?\n\n- [X] I have read and understood the rules in the [Contributing Guidelines](https://github.com/Dun-sin/Whisper/blob/main/CONTRIBUTING.md)\n\n### Are you willing to work on this issue ?\n\nYes I am willing to submit a PR!",
      reactions: {
        url: "https://api.github.com/repos/Dun-sin/Whisper/issues/245/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/Dun-sin/Whisper/issues/245/timeline",
      performed_via_github_app: null,
      state_reason: null,
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/Rayman-Sodhi/Clone-IT/issues/711",
      repository_url: "https://api.github.com/repos/Rayman-Sodhi/Clone-IT",
      labels_url:
        "https://api.github.com/repos/Rayman-Sodhi/Clone-IT/issues/711/labels{/name}",
      comments_url:
        "https://api.github.com/repos/Rayman-Sodhi/Clone-IT/issues/711/comments",
      events_url:
        "https://api.github.com/repos/Rayman-Sodhi/Clone-IT/issues/711/events",
      html_url: "https://github.com/Rayman-Sodhi/Clone-IT/issues/711",
      id: 1511860503,
      node_id: "I_kwDOF75h7c5aHSkX",
      number: 711,
      title: "Airbnb clone related bugs",
      user: {
        login: "cybraia",
        id: 66839875,
        node_id: "MDQ6VXNlcjY2ODM5ODc1",
        avatar_url: "https://avatars.githubusercontent.com/u/66839875?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/cybraia",
        html_url: "https://github.com/cybraia",
        followers_url: "https://api.github.com/users/cybraia/followers",
        following_url:
          "https://api.github.com/users/cybraia/following{/other_user}",
        gists_url: "https://api.github.com/users/cybraia/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/cybraia/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/cybraia/subscriptions",
        organizations_url: "https://api.github.com/users/cybraia/orgs",
        repos_url: "https://api.github.com/users/cybraia/repos",
        events_url: "https://api.github.com/users/cybraia/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/cybraia/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 3280349680,
          node_id: "MDU6TGFiZWwzMjgwMzQ5Njgw",
          url: "https://api.github.com/repos/Rayman-Sodhi/Clone-IT/labels/bug",
          name: "bug",
          color: "d73a4a",
          default: true,
          description: "Something isn't working",
        },
        {
          id: 4963196746,
          node_id: "LA_kwDOF75h7c8AAAABJ9RfSg",
          url: "https://api.github.com/repos/Rayman-Sodhi/Clone-IT/labels/assigned",
          name: "assigned",
          color: "48BC27",
          default: false,
          description: "Issue Assigned",
        },
      ],
      state: "open",
      locked: false,
      assignee: {
        login: "cybraia",
        id: 66839875,
        node_id: "MDQ6VXNlcjY2ODM5ODc1",
        avatar_url: "https://avatars.githubusercontent.com/u/66839875?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/cybraia",
        html_url: "https://github.com/cybraia",
        followers_url: "https://api.github.com/users/cybraia/followers",
        following_url:
          "https://api.github.com/users/cybraia/following{/other_user}",
        gists_url: "https://api.github.com/users/cybraia/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/cybraia/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/cybraia/subscriptions",
        organizations_url: "https://api.github.com/users/cybraia/orgs",
        repos_url: "https://api.github.com/users/cybraia/repos",
        events_url: "https://api.github.com/users/cybraia/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/cybraia/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "cybraia",
          id: 66839875,
          node_id: "MDQ6VXNlcjY2ODM5ODc1",
          avatar_url: "https://avatars.githubusercontent.com/u/66839875?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/cybraia",
          html_url: "https://github.com/cybraia",
          followers_url: "https://api.github.com/users/cybraia/followers",
          following_url:
            "https://api.github.com/users/cybraia/following{/other_user}",
          gists_url: "https://api.github.com/users/cybraia/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/cybraia/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/cybraia/subscriptions",
          organizations_url: "https://api.github.com/users/cybraia/orgs",
          repos_url: "https://api.github.com/users/cybraia/repos",
          events_url: "https://api.github.com/users/cybraia/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/cybraia/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 1,
      created_at: "2022-12-27T14:36:51Z",
      updated_at: "2023-01-01T16:39:48Z",
      closed_at: null,
      author_association: "NONE",
      active_lock_reason: null,
      body: "### What happened?\n\n### Back not working\r\nAfter clicking on Airbnb icon, it doesn't take to the homepage. \r\n### The website is not responsive\r\nAfter choosing a service, the web page is not mobile friendly.\n\n### How can we reproduce this bug?\n\nWhile clicking on the Airbnb icon, it should bring you to the home page.\r\nThe webpages need to be mobile responsive, the ratio of pictures to text is not correct. \r\nI can fix both issues. Please assign me the issue.\n\n### Desktop Information (Optional)\n\n_No response_\n\n### Urgency (Optional)\n\nNone",
      reactions: {
        url: "https://api.github.com/repos/Rayman-Sodhi/Clone-IT/issues/711/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/Rayman-Sodhi/Clone-IT/issues/711/timeline",
      performed_via_github_app: null,
      state_reason: null,
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/Arun9739/Paryatana/issues/357",
      repository_url: "https://api.github.com/repos/Arun9739/Paryatana",
      labels_url:
        "https://api.github.com/repos/Arun9739/Paryatana/issues/357/labels{/name}",
      comments_url:
        "https://api.github.com/repos/Arun9739/Paryatana/issues/357/comments",
      events_url:
        "https://api.github.com/repos/Arun9739/Paryatana/issues/357/events",
      html_url: "https://github.com/Arun9739/Paryatana/issues/357",
      id: 1510960380,
      node_id: "I_kwDOIHPuhM5aD2z8",
      number: 357,
      title: "improve mobile view by making more responsive ",
      user: {
        login: "shyamtawli",
        id: 104145978,
        node_id: "U_kgDOBjUkOg",
        avatar_url: "https://avatars.githubusercontent.com/u/104145978?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/shyamtawli",
        html_url: "https://github.com/shyamtawli",
        followers_url: "https://api.github.com/users/shyamtawli/followers",
        following_url:
          "https://api.github.com/users/shyamtawli/following{/other_user}",
        gists_url: "https://api.github.com/users/shyamtawli/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/shyamtawli/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/shyamtawli/subscriptions",
        organizations_url: "https://api.github.com/users/shyamtawli/orgs",
        repos_url: "https://api.github.com/users/shyamtawli/repos",
        events_url: "https://api.github.com/users/shyamtawli/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/shyamtawli/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4604441007,
          node_id: "LA_kwDOIHPuhM8AAAABEnIxrw",
          url: "https://api.github.com/repos/Arun9739/Paryatana/labels/enhancement",
          name: "enhancement",
          color: "a2eeef",
          default: true,
          description: "New feature or request",
        },
        {
          id: 4607400107,
          node_id: "LA_kwDOIHPuhM8AAAABEp9Yqw",
          url: "https://api.github.com/repos/Arun9739/Paryatana/labels/assigned",
          name: "assigned",
          color: "EC42E8",
          default: false,
          description: "",
        },
      ],
      state: "closed",
      locked: false,
      assignee: null,
      assignees: [],
      milestone: null,
      comments: 4,
      created_at: "2022-12-26T13:25:46Z",
      updated_at: "2022-12-27T16:44:40Z",
      closed_at: "2022-12-27T16:30:39Z",
      author_association: "CONTRIBUTOR",
      active_lock_reason: null,
      body: "# What is the bug :\r\nFooter is not mobile friendly and card are not well maintained\r\n\r\n\r\n# Expected behavior :\r\nShould be all device freindly.\r\n\r\n\r\n# Screenshots :\r\n![op](https://user-images.githubusercontent.com/104145978/209553656-70ee0bf3-7407-4c70-b2fa-8c0eb5721b60.JPG)\r\n\r\n\r\n\r\n",
      reactions: {
        url: "https://api.github.com/repos/Arun9739/Paryatana/issues/357/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/Arun9739/Paryatana/issues/357/timeline",
      performed_via_github_app: null,
      state_reason: "completed",
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/World-of-ML/Play-With-Python/issues/138",
      repository_url:
        "https://api.github.com/repos/World-of-ML/Play-With-Python",
      labels_url:
        "https://api.github.com/repos/World-of-ML/Play-With-Python/issues/138/labels{/name}",
      comments_url:
        "https://api.github.com/repos/World-of-ML/Play-With-Python/issues/138/comments",
      events_url:
        "https://api.github.com/repos/World-of-ML/Play-With-Python/issues/138/events",
      html_url: "https://github.com/World-of-ML/Play-With-Python/issues/138",
      id: 1510755555,
      node_id: "I_kwDOIQ7t385aDEzj",
      number: 138,
      title: "Turtle Crossing Game",
      user: {
        login: "joleyasarthak",
        id: 94008935,
        node_id: "U_kgDOBZp2Zw",
        avatar_url: "https://avatars.githubusercontent.com/u/94008935?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/joleyasarthak",
        html_url: "https://github.com/joleyasarthak",
        followers_url: "https://api.github.com/users/joleyasarthak/followers",
        following_url:
          "https://api.github.com/users/joleyasarthak/following{/other_user}",
        gists_url: "https://api.github.com/users/joleyasarthak/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/joleyasarthak/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/joleyasarthak/subscriptions",
        organizations_url: "https://api.github.com/users/joleyasarthak/orgs",
        repos_url: "https://api.github.com/users/joleyasarthak/repos",
        events_url:
          "https://api.github.com/users/joleyasarthak/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/joleyasarthak/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4759470225,
          node_id: "LA_kwDOIQ7t388AAAABG6_AkQ",
          url: "https://api.github.com/repos/World-of-ML/Play-With-Python/labels/Assigned",
          name: "Assigned",
          color: "D2F551",
          default: false,
          description: "",
        },
        {
          id: 4866451618,
          node_id: "LA_kwDOIQ7t388AAAABIhAoog",
          url: "https://api.github.com/repos/World-of-ML/Play-With-Python/labels/CODEPEAK%20%202022",
          name: "CODEPEAK  2022",
          color: "0E8A16",
          default: false,
          description: "",
        },
        {
          id: 4866456117,
          node_id: "LA_kwDOIQ7t388AAAABIhA6NQ",
          url: "https://api.github.com/repos/World-of-ML/Play-With-Python/labels/Medium",
          name: "Medium",
          color: "D93F0B",
          default: false,
          description: "",
        },
      ],
      state: "closed",
      locked: false,
      assignee: {
        login: "joleyasarthak",
        id: 94008935,
        node_id: "U_kgDOBZp2Zw",
        avatar_url: "https://avatars.githubusercontent.com/u/94008935?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/joleyasarthak",
        html_url: "https://github.com/joleyasarthak",
        followers_url: "https://api.github.com/users/joleyasarthak/followers",
        following_url:
          "https://api.github.com/users/joleyasarthak/following{/other_user}",
        gists_url: "https://api.github.com/users/joleyasarthak/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/joleyasarthak/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/joleyasarthak/subscriptions",
        organizations_url: "https://api.github.com/users/joleyasarthak/orgs",
        repos_url: "https://api.github.com/users/joleyasarthak/repos",
        events_url:
          "https://api.github.com/users/joleyasarthak/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/joleyasarthak/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "joleyasarthak",
          id: 94008935,
          node_id: "U_kgDOBZp2Zw",
          avatar_url: "https://avatars.githubusercontent.com/u/94008935?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/joleyasarthak",
          html_url: "https://github.com/joleyasarthak",
          followers_url: "https://api.github.com/users/joleyasarthak/followers",
          following_url:
            "https://api.github.com/users/joleyasarthak/following{/other_user}",
          gists_url:
            "https://api.github.com/users/joleyasarthak/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/joleyasarthak/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/joleyasarthak/subscriptions",
          organizations_url: "https://api.github.com/users/joleyasarthak/orgs",
          repos_url: "https://api.github.com/users/joleyasarthak/repos",
          events_url:
            "https://api.github.com/users/joleyasarthak/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/joleyasarthak/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 2,
      created_at: "2022-12-26T08:53:22Z",
      updated_at: "2022-12-28T09:20:22Z",
      closed_at: "2022-12-28T09:20:22Z",
      author_association: "CONTRIBUTOR",
      active_lock_reason: null,
      body: '### Play With Python Repository (Proposing new issue)\r\n:red_circle: **Project Title** : Turtle Crossing Game </br>\r\n:red_circle: **Aim** : Create a Turtle Crossing Game </br>\r\n\r\n**********************************************************************************\r\n:red_circle::yellow_circle: **Points to Note :**\r\n\r\n- The issues will be assigned on a first come first serve basis, 1 Issue == 1 PR.\r\n- "Issue Title" and "PR Title should be the same. Include issue number along with it.\r\n- Follow Contributing Guidelines & Code of Conduct before start Contributing.\r\n\r\n***********************************************************************\r\n:white_check_mark: **To be Mentioned while taking the issue :**\r\n- Full name : \r\n- GitHub Profile Link : \r\n- Email ID :\r\n- Participant ID (if applicable):\r\n- Approach for this Project :\r\n- What is your participant role? (Mention the Open Source program)\r\n\r\n*************************************************************\r\nHappy Contributing 🚀 \r\n\r\nAll the best. Enjoy your open source journey ahead. 😎\r\n',
      reactions: {
        url: "https://api.github.com/repos/World-of-ML/Play-With-Python/issues/138/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/World-of-ML/Play-With-Python/issues/138/timeline",
      performed_via_github_app: null,
      state_reason: "completed",
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/ForgeForce/ActionsTest/issues/53",
      repository_url: "https://api.github.com/repos/ForgeForce/ActionsTest",
      labels_url:
        "https://api.github.com/repos/ForgeForce/ActionsTest/issues/53/labels{/name}",
      comments_url:
        "https://api.github.com/repos/ForgeForce/ActionsTest/issues/53/comments",
      events_url:
        "https://api.github.com/repos/ForgeForce/ActionsTest/issues/53/events",
      html_url: "https://github.com/ForgeForce/ActionsTest/issues/53",
      id: 1510105500,
      node_id: "I_kwDOIN3dJM5aAmGc",
      number: 53,
      title: "Hi",
      user: {
        login: "Matyrobbrt",
        id: 65940752,
        node_id: "MDQ6VXNlcjY1OTQwNzUy",
        avatar_url: "https://avatars.githubusercontent.com/u/65940752?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Matyrobbrt",
        html_url: "https://github.com/Matyrobbrt",
        followers_url: "https://api.github.com/users/Matyrobbrt/followers",
        following_url:
          "https://api.github.com/users/Matyrobbrt/following{/other_user}",
        gists_url: "https://api.github.com/users/Matyrobbrt/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Matyrobbrt/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Matyrobbrt/subscriptions",
        organizations_url: "https://api.github.com/users/Matyrobbrt/orgs",
        repos_url: "https://api.github.com/users/Matyrobbrt/repos",
        events_url: "https://api.github.com/users/Matyrobbrt/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Matyrobbrt/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4937570832,
          node_id: "LA_kwDOIN3dJM8AAAABJk1aEA",
          url: "https://api.github.com/repos/ForgeForce/ActionsTest/labels/Assigned",
          name: "Assigned",
          color: "6B7067",
          default: false,
          description: "",
        },
      ],
      state: "closed",
      locked: true,
      assignee: {
        login: "AterAnimAvis",
        id: 8502446,
        node_id: "MDQ6VXNlcjg1MDI0NDY=",
        avatar_url: "https://avatars.githubusercontent.com/u/8502446?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/AterAnimAvis",
        html_url: "https://github.com/AterAnimAvis",
        followers_url: "https://api.github.com/users/AterAnimAvis/followers",
        following_url:
          "https://api.github.com/users/AterAnimAvis/following{/other_user}",
        gists_url: "https://api.github.com/users/AterAnimAvis/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/AterAnimAvis/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/AterAnimAvis/subscriptions",
        organizations_url: "https://api.github.com/users/AterAnimAvis/orgs",
        repos_url: "https://api.github.com/users/AterAnimAvis/repos",
        events_url:
          "https://api.github.com/users/AterAnimAvis/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/AterAnimAvis/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "AterAnimAvis",
          id: 8502446,
          node_id: "MDQ6VXNlcjg1MDI0NDY=",
          avatar_url: "https://avatars.githubusercontent.com/u/8502446?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/AterAnimAvis",
          html_url: "https://github.com/AterAnimAvis",
          followers_url: "https://api.github.com/users/AterAnimAvis/followers",
          following_url:
            "https://api.github.com/users/AterAnimAvis/following{/other_user}",
          gists_url:
            "https://api.github.com/users/AterAnimAvis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/AterAnimAvis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/AterAnimAvis/subscriptions",
          organizations_url: "https://api.github.com/users/AterAnimAvis/orgs",
          repos_url: "https://api.github.com/users/AterAnimAvis/repos",
          events_url:
            "https://api.github.com/users/AterAnimAvis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/AterAnimAvis/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "sciwhiz12",
          id: 21304337,
          node_id: "MDQ6VXNlcjIxMzA0MzM3",
          avatar_url: "https://avatars.githubusercontent.com/u/21304337?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/sciwhiz12",
          html_url: "https://github.com/sciwhiz12",
          followers_url: "https://api.github.com/users/sciwhiz12/followers",
          following_url:
            "https://api.github.com/users/sciwhiz12/following{/other_user}",
          gists_url: "https://api.github.com/users/sciwhiz12/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/sciwhiz12/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/sciwhiz12/subscriptions",
          organizations_url: "https://api.github.com/users/sciwhiz12/orgs",
          repos_url: "https://api.github.com/users/sciwhiz12/repos",
          events_url: "https://api.github.com/users/sciwhiz12/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/sciwhiz12/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 4,
      created_at: "2022-12-24T14:16:49Z",
      updated_at: "2022-12-24T14:35:21Z",
      closed_at: "2022-12-24T14:35:20Z",
      author_association: "MEMBER",
      active_lock_reason: null,
      body: null,
      reactions: {
        url: "https://api.github.com/repos/ForgeForce/ActionsTest/issues/53/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/ForgeForce/ActionsTest/issues/53/timeline",
      performed_via_github_app: null,
      state_reason: "not_planned",
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/Dun-sin/Whisper/issues/242",
      repository_url: "https://api.github.com/repos/Dun-sin/Whisper",
      labels_url:
        "https://api.github.com/repos/Dun-sin/Whisper/issues/242/labels{/name}",
      comments_url:
        "https://api.github.com/repos/Dun-sin/Whisper/issues/242/comments",
      events_url:
        "https://api.github.com/repos/Dun-sin/Whisper/issues/242/events",
      html_url: "https://github.com/Dun-sin/Whisper/issues/242",
      id: 1506928726,
      node_id: "I_kwDOHMJ-o85Z0ehW",
      number: 242,
      title: "[FEATURE] change icon pack from `react-icons` to `iconify`",
      user: {
        login: "Dun-sin",
        id: 78784850,
        node_id: "MDQ6VXNlcjc4Nzg0ODUw",
        avatar_url: "https://avatars.githubusercontent.com/u/78784850?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Dun-sin",
        html_url: "https://github.com/Dun-sin",
        followers_url: "https://api.github.com/users/Dun-sin/followers",
        following_url:
          "https://api.github.com/users/Dun-sin/following{/other_user}",
        gists_url: "https://api.github.com/users/Dun-sin/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Dun-sin/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/Dun-sin/subscriptions",
        organizations_url: "https://api.github.com/users/Dun-sin/orgs",
        repos_url: "https://api.github.com/users/Dun-sin/repos",
        events_url: "https://api.github.com/users/Dun-sin/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Dun-sin/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4042907854,
          node_id: "LA_kwDOHMJ-o87w-eDO",
          url: "https://api.github.com/repos/Dun-sin/Whisper/labels/enhancement",
          name: "enhancement",
          color: "a2eeef",
          default: true,
          description: "New feature or request",
        },
        {
          id: 4042907856,
          node_id: "LA_kwDOHMJ-o87w-eDQ",
          url: "https://api.github.com/repos/Dun-sin/Whisper/labels/good%20first%20issue",
          name: "good first issue",
          color: "7057ff",
          default: true,
          description: "Good for newcomers",
        },
        {
          id: 4283885793,
          node_id: "LA_kwDOHMJ-o87_Vujh",
          url: "https://api.github.com/repos/Dun-sin/Whisper/labels/feature",
          name: "feature",
          color: "BFD4F2",
          default: false,
          description: "",
        },
        {
          id: 4292078647,
          node_id: "LA_kwDOHMJ-o87_0-w3",
          url: "https://api.github.com/repos/Dun-sin/Whisper/labels/%F0%9F%9F%A9%20priority:%20low",
          name: "🟩 priority: low",
          color: "55EA53",
          default: false,
          description: "Low priority and doesn't need to be rushed",
        },
        {
          id: 4349974561,
          node_id: "LA_kwDOHMJ-o88AAAABA0dYIQ",
          url: "https://api.github.com/repos/Dun-sin/Whisper/labels/EddieHub:good-first-issue",
          name: "EddieHub:good-first-issue",
          color: "3A8258",
          default: false,
          description: "",
        },
        {
          id: 4458534716,
          node_id: "LA_kwDOHMJ-o88AAAABCb_XPA",
          url: "https://api.github.com/repos/Dun-sin/Whisper/labels/Easy",
          name: "Easy",
          color: "DEA99E",
          default: false,
          description: "Easy to work on",
        },
        {
          id: 4645172483,
          node_id: "LA_kwDOHMJ-o88AAAABFN-1Aw",
          url: "https://api.github.com/repos/Dun-sin/Whisper/labels/assigned",
          name: "assigned",
          color: "c2e0c6",
          default: false,
          description: "",
        },
      ],
      state: "closed",
      locked: false,
      assignee: {
        login: "devvsakib",
        id: 88339569,
        node_id: "MDQ6VXNlcjg4MzM5NTY5",
        avatar_url: "https://avatars.githubusercontent.com/u/88339569?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/devvsakib",
        html_url: "https://github.com/devvsakib",
        followers_url: "https://api.github.com/users/devvsakib/followers",
        following_url:
          "https://api.github.com/users/devvsakib/following{/other_user}",
        gists_url: "https://api.github.com/users/devvsakib/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/devvsakib/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/devvsakib/subscriptions",
        organizations_url: "https://api.github.com/users/devvsakib/orgs",
        repos_url: "https://api.github.com/users/devvsakib/repos",
        events_url: "https://api.github.com/users/devvsakib/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/devvsakib/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "devvsakib",
          id: 88339569,
          node_id: "MDQ6VXNlcjg4MzM5NTY5",
          avatar_url: "https://avatars.githubusercontent.com/u/88339569?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/devvsakib",
          html_url: "https://github.com/devvsakib",
          followers_url: "https://api.github.com/users/devvsakib/followers",
          following_url:
            "https://api.github.com/users/devvsakib/following{/other_user}",
          gists_url: "https://api.github.com/users/devvsakib/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/devvsakib/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/devvsakib/subscriptions",
          organizations_url: "https://api.github.com/users/devvsakib/orgs",
          repos_url: "https://api.github.com/users/devvsakib/repos",
          events_url: "https://api.github.com/users/devvsakib/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/devvsakib/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 3,
      created_at: "2022-12-21T21:27:27Z",
      updated_at: "2022-12-22T17:31:38Z",
      closed_at: "2022-12-22T17:31:38Z",
      author_association: "OWNER",
      active_lock_reason: null,
      body: "### Description\n\nI think the Iconify icon pack is currently the best option because it provides a clean and organized look. To use it, simply replace the current icons with the Iconify version in the navbar.\r\n\r\n- For the search icon of the navbar (navigation), use -> https://icon-sets.iconify.design/fluent/people-search-20-regular/\r\n- For the Chat icon of the navBar, use -> https://icon-sets.iconify.design/ion/chatbubble-ellipses-outline/\r\n- For the Profile icon of the navBar, use -> https://icon-sets.iconify.design/fluent/person-circle-20-regular/\r\n- For the logout icon of the navBar, use -> https://icon-sets.iconify.design/majesticons/logout-half-circle/\r\n- For the settings icon of the navBar, use -> https://icon-sets.iconify.design/ic/outline-settings/\n\n### Screenshots\n\nYour focus is here\r\n![image](https://user-images.githubusercontent.com/78784850/209005243-984e461a-7476-4892-8842-5047e1e1f628.png)\r\n\n\n### Additional information\n\n### Make sure to read the [guidelines](https://github.com/Dun-sin/Whisper/blob/main/CONTRIBUTING.md) to contributing to this project.\n\n### 👀 Have you checked if this issue has been raised before?\n\n- [X] I checked and didn't find similar issue\n\n### 🏢 Have you read the Contributing Guidelines?\n\n- [X] I have read and understood the rules in the [Contributing Guidelines](https://github.com/Dun-sin/Whisper/blob/main/CONTRIBUTING.md)\n\n### Are you willing to work on this issue ?\n\nNone",
      reactions: {
        url: "https://api.github.com/repos/Dun-sin/Whisper/issues/242/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/Dun-sin/Whisper/issues/242/timeline",
      performed_via_github_app: null,
      state_reason: "completed",
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/luketainton/testing/issues/15",
      repository_url: "https://api.github.com/repos/luketainton/testing",
      labels_url:
        "https://api.github.com/repos/luketainton/testing/issues/15/labels{/name}",
      comments_url:
        "https://api.github.com/repos/luketainton/testing/issues/15/comments",
      events_url:
        "https://api.github.com/repos/luketainton/testing/issues/15/events",
      html_url: "https://github.com/luketainton/testing/issues/15",
      id: 1505451510,
      node_id: "I_kwDOHvjYUc5Zu132",
      number: 15,
      title: "test",
      user: {
        login: "luketainton",
        id: 22561713,
        node_id: "MDQ6VXNlcjIyNTYxNzEz",
        avatar_url: "https://avatars.githubusercontent.com/u/22561713?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/luketainton",
        html_url: "https://github.com/luketainton",
        followers_url: "https://api.github.com/users/luketainton/followers",
        following_url:
          "https://api.github.com/users/luketainton/following{/other_user}",
        gists_url: "https://api.github.com/users/luketainton/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/luketainton/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/luketainton/subscriptions",
        organizations_url: "https://api.github.com/users/luketainton/orgs",
        repos_url: "https://api.github.com/users/luketainton/repos",
        events_url: "https://api.github.com/users/luketainton/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/luketainton/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4930718178,
          node_id: "LA_kwDOHvjYUc8AAAABJeTJ4g",
          url: "https://api.github.com/repos/luketainton/testing/labels/assigned",
          name: "assigned",
          color: "ededed",
          default: false,
          description: null,
        },
      ],
      state: "closed",
      locked: false,
      assignee: {
        login: "luketainton",
        id: 22561713,
        node_id: "MDQ6VXNlcjIyNTYxNzEz",
        avatar_url: "https://avatars.githubusercontent.com/u/22561713?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/luketainton",
        html_url: "https://github.com/luketainton",
        followers_url: "https://api.github.com/users/luketainton/followers",
        following_url:
          "https://api.github.com/users/luketainton/following{/other_user}",
        gists_url: "https://api.github.com/users/luketainton/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/luketainton/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/luketainton/subscriptions",
        organizations_url: "https://api.github.com/users/luketainton/orgs",
        repos_url: "https://api.github.com/users/luketainton/repos",
        events_url: "https://api.github.com/users/luketainton/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/luketainton/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "luketainton",
          id: 22561713,
          node_id: "MDQ6VXNlcjIyNTYxNzEz",
          avatar_url: "https://avatars.githubusercontent.com/u/22561713?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/luketainton",
          html_url: "https://github.com/luketainton",
          followers_url: "https://api.github.com/users/luketainton/followers",
          following_url:
            "https://api.github.com/users/luketainton/following{/other_user}",
          gists_url: "https://api.github.com/users/luketainton/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/luketainton/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/luketainton/subscriptions",
          organizations_url: "https://api.github.com/users/luketainton/orgs",
          repos_url: "https://api.github.com/users/luketainton/repos",
          events_url:
            "https://api.github.com/users/luketainton/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/luketainton/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 4,
      created_at: "2022-12-20T23:26:15Z",
      updated_at: "2022-12-20T23:39:42Z",
      closed_at: "2022-12-20T23:39:42Z",
      author_association: "OWNER",
      active_lock_reason: null,
      body: "hello!",
      reactions: {
        url: "https://api.github.com/repos/luketainton/testing/issues/15/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/luketainton/testing/issues/15/timeline",
      performed_via_github_app: null,
      state_reason: "not_planned",
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/luketainton/testing/issues/14",
      repository_url: "https://api.github.com/repos/luketainton/testing",
      labels_url:
        "https://api.github.com/repos/luketainton/testing/issues/14/labels{/name}",
      comments_url:
        "https://api.github.com/repos/luketainton/testing/issues/14/comments",
      events_url:
        "https://api.github.com/repos/luketainton/testing/issues/14/events",
      html_url: "https://github.com/luketainton/testing/issues/14",
      id: 1505432087,
      node_id: "I_kwDOHvjYUc5ZuxIX",
      number: 14,
      title: "Testing",
      user: {
        login: "luketainton",
        id: 22561713,
        node_id: "MDQ6VXNlcjIyNTYxNzEz",
        avatar_url: "https://avatars.githubusercontent.com/u/22561713?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/luketainton",
        html_url: "https://github.com/luketainton",
        followers_url: "https://api.github.com/users/luketainton/followers",
        following_url:
          "https://api.github.com/users/luketainton/following{/other_user}",
        gists_url: "https://api.github.com/users/luketainton/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/luketainton/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/luketainton/subscriptions",
        organizations_url: "https://api.github.com/users/luketainton/orgs",
        repos_url: "https://api.github.com/users/luketainton/repos",
        events_url: "https://api.github.com/users/luketainton/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/luketainton/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4930718178,
          node_id: "LA_kwDOHvjYUc8AAAABJeTJ4g",
          url: "https://api.github.com/repos/luketainton/testing/labels/assigned",
          name: "assigned",
          color: "ededed",
          default: false,
          description: null,
        },
      ],
      state: "closed",
      locked: false,
      assignee: {
        login: "luketainton",
        id: 22561713,
        node_id: "MDQ6VXNlcjIyNTYxNzEz",
        avatar_url: "https://avatars.githubusercontent.com/u/22561713?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/luketainton",
        html_url: "https://github.com/luketainton",
        followers_url: "https://api.github.com/users/luketainton/followers",
        following_url:
          "https://api.github.com/users/luketainton/following{/other_user}",
        gists_url: "https://api.github.com/users/luketainton/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/luketainton/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/luketainton/subscriptions",
        organizations_url: "https://api.github.com/users/luketainton/orgs",
        repos_url: "https://api.github.com/users/luketainton/repos",
        events_url: "https://api.github.com/users/luketainton/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/luketainton/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "luketainton",
          id: 22561713,
          node_id: "MDQ6VXNlcjIyNTYxNzEz",
          avatar_url: "https://avatars.githubusercontent.com/u/22561713?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/luketainton",
          html_url: "https://github.com/luketainton",
          followers_url: "https://api.github.com/users/luketainton/followers",
          following_url:
            "https://api.github.com/users/luketainton/following{/other_user}",
          gists_url: "https://api.github.com/users/luketainton/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/luketainton/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/luketainton/subscriptions",
          organizations_url: "https://api.github.com/users/luketainton/orgs",
          repos_url: "https://api.github.com/users/luketainton/repos",
          events_url:
            "https://api.github.com/users/luketainton/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/luketainton/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 4,
      created_at: "2022-12-20T23:10:30Z",
      updated_at: "2022-12-20T23:21:36Z",
      closed_at: "2022-12-20T23:21:29Z",
      author_association: "OWNER",
      active_lock_reason: null,
      body: "hello",
      reactions: {
        url: "https://api.github.com/repos/luketainton/testing/issues/14/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/luketainton/testing/issues/14/timeline",
      performed_via_github_app: null,
      state_reason: "not_planned",
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/luketainton/testing/issues/13",
      repository_url: "https://api.github.com/repos/luketainton/testing",
      labels_url:
        "https://api.github.com/repos/luketainton/testing/issues/13/labels{/name}",
      comments_url:
        "https://api.github.com/repos/luketainton/testing/issues/13/comments",
      events_url:
        "https://api.github.com/repos/luketainton/testing/issues/13/events",
      html_url: "https://github.com/luketainton/testing/issues/13",
      id: 1505375137,
      node_id: "I_kwDOHvjYUc5ZujOh",
      number: 13,
      title: "Dependency Dashboard",
      user: {
        login: "renovate[bot]",
        id: 29139614,
        node_id: "MDM6Qm90MjkxMzk2MTQ=",
        avatar_url: "https://avatars.githubusercontent.com/in/2740?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/renovate%5Bbot%5D",
        html_url: "https://github.com/apps/renovate",
        followers_url:
          "https://api.github.com/users/renovate%5Bbot%5D/followers",
        following_url:
          "https://api.github.com/users/renovate%5Bbot%5D/following{/other_user}",
        gists_url:
          "https://api.github.com/users/renovate%5Bbot%5D/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/renovate%5Bbot%5D/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/renovate%5Bbot%5D/subscriptions",
        organizations_url:
          "https://api.github.com/users/renovate%5Bbot%5D/orgs",
        repos_url: "https://api.github.com/users/renovate%5Bbot%5D/repos",
        events_url:
          "https://api.github.com/users/renovate%5Bbot%5D/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/renovate%5Bbot%5D/received_events",
        type: "Bot",
        site_admin: false,
      },
      labels: [
        {
          id: 4930718178,
          node_id: "LA_kwDOHvjYUc8AAAABJeTJ4g",
          url: "https://api.github.com/repos/luketainton/testing/labels/assigned",
          name: "assigned",
          color: "ededed",
          default: false,
          description: null,
        },
      ],
      state: "open",
      locked: false,
      assignee: {
        login: "luketainton",
        id: 22561713,
        node_id: "MDQ6VXNlcjIyNTYxNzEz",
        avatar_url: "https://avatars.githubusercontent.com/u/22561713?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/luketainton",
        html_url: "https://github.com/luketainton",
        followers_url: "https://api.github.com/users/luketainton/followers",
        following_url:
          "https://api.github.com/users/luketainton/following{/other_user}",
        gists_url: "https://api.github.com/users/luketainton/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/luketainton/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/luketainton/subscriptions",
        organizations_url: "https://api.github.com/users/luketainton/orgs",
        repos_url: "https://api.github.com/users/luketainton/repos",
        events_url: "https://api.github.com/users/luketainton/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/luketainton/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "luketainton",
          id: 22561713,
          node_id: "MDQ6VXNlcjIyNTYxNzEz",
          avatar_url: "https://avatars.githubusercontent.com/u/22561713?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/luketainton",
          html_url: "https://github.com/luketainton",
          followers_url: "https://api.github.com/users/luketainton/followers",
          following_url:
            "https://api.github.com/users/luketainton/following{/other_user}",
          gists_url: "https://api.github.com/users/luketainton/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/luketainton/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/luketainton/subscriptions",
          organizations_url: "https://api.github.com/users/luketainton/orgs",
          repos_url: "https://api.github.com/users/luketainton/repos",
          events_url:
            "https://api.github.com/users/luketainton/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/luketainton/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 6,
      created_at: "2022-12-20T22:07:14Z",
      updated_at: "2022-12-21T11:08:52Z",
      closed_at: null,
      author_association: "CONTRIBUTOR",
      active_lock_reason: null,
      body: "This issue lists Renovate updates and detected dependencies. Read the [Dependency Dashboard](https://docs.renovatebot.com/key-concepts/dashboard/) docs to learn more.\n\nThis repository currently has no open or pending branches.\n\n## Detected dependencies\n\n<details><summary>github-actions</summary>\n<blockquote>\n\n<details><summary>.github/workflows/pushover.yaml</summary>\n\n - `actions/checkout v3`\n\n</details>\n\n</blockquote>\n</details>\n\n---\n\n- [ ] <!-- manual job -->Check this box to trigger a request for Renovate to run again on this repository\n\n",
      reactions: {
        url: "https://api.github.com/repos/luketainton/testing/issues/13/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/luketainton/testing/issues/13/timeline",
      performed_via_github_app: null,
      state_reason: null,
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/12",
      repository_url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint",
      labels_url:
        "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/12/labels{/name}",
      comments_url:
        "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/12/comments",
      events_url:
        "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/12/events",
      html_url: "https://github.com/prathimacode-hub/Dev-Mint/issues/12",
      id: 1501467531,
      node_id: "I_kwDOIJTq2M5ZfpOL",
      number: 12,
      title: "Title: create a drum kit ",
      user: {
        login: "Tushar98644",
        id: 107763774,
        node_id: "U_kgDOBmxYPg",
        avatar_url: "https://avatars.githubusercontent.com/u/107763774?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Tushar98644",
        html_url: "https://github.com/Tushar98644",
        followers_url: "https://api.github.com/users/Tushar98644/followers",
        following_url:
          "https://api.github.com/users/Tushar98644/following{/other_user}",
        gists_url: "https://api.github.com/users/Tushar98644/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Tushar98644/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Tushar98644/subscriptions",
        organizations_url: "https://api.github.com/users/Tushar98644/orgs",
        repos_url: "https://api.github.com/users/Tushar98644/repos",
        events_url: "https://api.github.com/users/Tushar98644/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Tushar98644/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4877210171,
          node_id: "LA_kwDOIJTq2M8AAAABIrRSOw",
          url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint/labels/Assigned",
          name: "Assigned",
          color: "E8779F",
          default: false,
          description: "This issue is assigned for CodePeak'22",
        },
        {
          id: 4877263460,
          node_id: "LA_kwDOIJTq2M8AAAABIrUiZA",
          url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint/labels/CodePeak'22",
          name: "CodePeak'22",
          color: "449410",
          default: false,
          description: "This tag is applicable for issues under Code Peak 2022",
        },
      ],
      state: "open",
      locked: false,
      assignee: {
        login: "Tushar98644",
        id: 107763774,
        node_id: "U_kgDOBmxYPg",
        avatar_url: "https://avatars.githubusercontent.com/u/107763774?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Tushar98644",
        html_url: "https://github.com/Tushar98644",
        followers_url: "https://api.github.com/users/Tushar98644/followers",
        following_url:
          "https://api.github.com/users/Tushar98644/following{/other_user}",
        gists_url: "https://api.github.com/users/Tushar98644/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Tushar98644/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Tushar98644/subscriptions",
        organizations_url: "https://api.github.com/users/Tushar98644/orgs",
        repos_url: "https://api.github.com/users/Tushar98644/repos",
        events_url: "https://api.github.com/users/Tushar98644/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Tushar98644/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "Tushar98644",
          id: 107763774,
          node_id: "U_kgDOBmxYPg",
          avatar_url: "https://avatars.githubusercontent.com/u/107763774?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Tushar98644",
          html_url: "https://github.com/Tushar98644",
          followers_url: "https://api.github.com/users/Tushar98644/followers",
          following_url:
            "https://api.github.com/users/Tushar98644/following{/other_user}",
          gists_url: "https://api.github.com/users/Tushar98644/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Tushar98644/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Tushar98644/subscriptions",
          organizations_url: "https://api.github.com/users/Tushar98644/orgs",
          repos_url: "https://api.github.com/users/Tushar98644/repos",
          events_url:
            "https://api.github.com/users/Tushar98644/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Tushar98644/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 5,
      created_at: "2022-12-17T16:33:58Z",
      updated_at: "2022-12-17T17:48:09Z",
      closed_at: null,
      author_association: "NONE",
      active_lock_reason: null,
      body: '### Are you a CodePeak participant?\r\n\r\nyes\r\n\r\n### Is your feature request related to a problem? Please describe.\r\n\r\nno\r\n\r\n### Describe the solution you\'d like.\r\n\r\nwould provide different key press function to diff keys and provide some sound to each assigned key using that function...\r\n\r\n### Describe alternatives you\'ve considered.\r\n\r\n-\r\n\r\n### Add any other context or screenshots about the feature request here.\r\n\r\n<img width="928" alt="Screenshot 2022-12-17 at 10 03 13 PM" src="https://user-images.githubusercontent.com/107763774/208251923-06c73528-4826-4c17-9005-1c60eb033031.png">\r\n',
      reactions: {
        url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/12/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/12/timeline",
      performed_via_github_app: null,
      state_reason: null,
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/11",
      repository_url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint",
      labels_url:
        "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/11/labels{/name}",
      comments_url:
        "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/11/comments",
      events_url:
        "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/11/events",
      html_url: "https://github.com/prathimacode-hub/Dev-Mint/issues/11",
      id: 1501467139,
      node_id: "I_kwDOIJTq2M5ZfpID",
      number: 11,
      title: "Title: Build a speech detection app",
      user: {
        login: "Tushar98644",
        id: 107763774,
        node_id: "U_kgDOBmxYPg",
        avatar_url: "https://avatars.githubusercontent.com/u/107763774?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Tushar98644",
        html_url: "https://github.com/Tushar98644",
        followers_url: "https://api.github.com/users/Tushar98644/followers",
        following_url:
          "https://api.github.com/users/Tushar98644/following{/other_user}",
        gists_url: "https://api.github.com/users/Tushar98644/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Tushar98644/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Tushar98644/subscriptions",
        organizations_url: "https://api.github.com/users/Tushar98644/orgs",
        repos_url: "https://api.github.com/users/Tushar98644/repos",
        events_url: "https://api.github.com/users/Tushar98644/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Tushar98644/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4877210171,
          node_id: "LA_kwDOIJTq2M8AAAABIrRSOw",
          url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint/labels/Assigned",
          name: "Assigned",
          color: "E8779F",
          default: false,
          description: "This issue is assigned for CodePeak'22",
        },
        {
          id: 4877263460,
          node_id: "LA_kwDOIJTq2M8AAAABIrUiZA",
          url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint/labels/CodePeak'22",
          name: "CodePeak'22",
          color: "449410",
          default: false,
          description: "This tag is applicable for issues under Code Peak 2022",
        },
      ],
      state: "open",
      locked: false,
      assignee: {
        login: "Tushar98644",
        id: 107763774,
        node_id: "U_kgDOBmxYPg",
        avatar_url: "https://avatars.githubusercontent.com/u/107763774?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Tushar98644",
        html_url: "https://github.com/Tushar98644",
        followers_url: "https://api.github.com/users/Tushar98644/followers",
        following_url:
          "https://api.github.com/users/Tushar98644/following{/other_user}",
        gists_url: "https://api.github.com/users/Tushar98644/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Tushar98644/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Tushar98644/subscriptions",
        organizations_url: "https://api.github.com/users/Tushar98644/orgs",
        repos_url: "https://api.github.com/users/Tushar98644/repos",
        events_url: "https://api.github.com/users/Tushar98644/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Tushar98644/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "Tushar98644",
          id: 107763774,
          node_id: "U_kgDOBmxYPg",
          avatar_url: "https://avatars.githubusercontent.com/u/107763774?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Tushar98644",
          html_url: "https://github.com/Tushar98644",
          followers_url: "https://api.github.com/users/Tushar98644/followers",
          following_url:
            "https://api.github.com/users/Tushar98644/following{/other_user}",
          gists_url: "https://api.github.com/users/Tushar98644/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Tushar98644/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Tushar98644/subscriptions",
          organizations_url: "https://api.github.com/users/Tushar98644/orgs",
          repos_url: "https://api.github.com/users/Tushar98644/repos",
          events_url:
            "https://api.github.com/users/Tushar98644/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Tushar98644/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 4,
      created_at: "2022-12-17T16:32:10Z",
      updated_at: "2022-12-17T17:49:54Z",
      closed_at: null,
      author_association: "NONE",
      active_lock_reason: null,
      body: "### Are you a CodePeak participant?\r\n\r\nyes\r\n\r\n### Is your feature request related to a problem? Please describe.\r\n\r\nno\r\n\r\n### Describe the solution you'd like.\r\n\r\nwould be using javascript, html and css with the help of window speech recognition WebKit API\r\n\r\n### Describe alternatives you've considered.\r\n\r\nnone\r\n\r\n### Add any other context or screenshots about the feature request here.\r\n\r\n![Copy-of-make-landing-page-in-5minutes-1-1](https://user-images.githubusercontent.com/107763774/208251850-fb9fa1da-b5f9-4528-bef6-0db91abd70c6.jpg)\r\n",
      reactions: {
        url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/11/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/11/timeline",
      performed_via_github_app: null,
      state_reason: null,
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/World-of-ML/Play-With-Python/issues/122",
      repository_url:
        "https://api.github.com/repos/World-of-ML/Play-With-Python",
      labels_url:
        "https://api.github.com/repos/World-of-ML/Play-With-Python/issues/122/labels{/name}",
      comments_url:
        "https://api.github.com/repos/World-of-ML/Play-With-Python/issues/122/comments",
      events_url:
        "https://api.github.com/repos/World-of-ML/Play-With-Python/issues/122/events",
      html_url: "https://github.com/World-of-ML/Play-With-Python/issues/122",
      id: 1501419631,
      node_id: "I_kwDOIQ7t385Zfdhv",
      number: 122,
      title: "Pomodoro App GUI",
      user: {
        login: "joleyasarthak",
        id: 94008935,
        node_id: "U_kgDOBZp2Zw",
        avatar_url: "https://avatars.githubusercontent.com/u/94008935?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/joleyasarthak",
        html_url: "https://github.com/joleyasarthak",
        followers_url: "https://api.github.com/users/joleyasarthak/followers",
        following_url:
          "https://api.github.com/users/joleyasarthak/following{/other_user}",
        gists_url: "https://api.github.com/users/joleyasarthak/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/joleyasarthak/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/joleyasarthak/subscriptions",
        organizations_url: "https://api.github.com/users/joleyasarthak/orgs",
        repos_url: "https://api.github.com/users/joleyasarthak/repos",
        events_url:
          "https://api.github.com/users/joleyasarthak/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/joleyasarthak/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4759470225,
          node_id: "LA_kwDOIQ7t388AAAABG6_AkQ",
          url: "https://api.github.com/repos/World-of-ML/Play-With-Python/labels/Assigned",
          name: "Assigned",
          color: "D2F551",
          default: false,
          description: "",
        },
        {
          id: 4866451618,
          node_id: "LA_kwDOIQ7t388AAAABIhAoog",
          url: "https://api.github.com/repos/World-of-ML/Play-With-Python/labels/CODEPEAK%20%202022",
          name: "CODEPEAK  2022",
          color: "0E8A16",
          default: false,
          description: "",
        },
        {
          id: 4866456117,
          node_id: "LA_kwDOIQ7t388AAAABIhA6NQ",
          url: "https://api.github.com/repos/World-of-ML/Play-With-Python/labels/Medium",
          name: "Medium",
          color: "D93F0B",
          default: false,
          description: "",
        },
      ],
      state: "closed",
      locked: false,
      assignee: {
        login: "joleyasarthak",
        id: 94008935,
        node_id: "U_kgDOBZp2Zw",
        avatar_url: "https://avatars.githubusercontent.com/u/94008935?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/joleyasarthak",
        html_url: "https://github.com/joleyasarthak",
        followers_url: "https://api.github.com/users/joleyasarthak/followers",
        following_url:
          "https://api.github.com/users/joleyasarthak/following{/other_user}",
        gists_url: "https://api.github.com/users/joleyasarthak/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/joleyasarthak/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/joleyasarthak/subscriptions",
        organizations_url: "https://api.github.com/users/joleyasarthak/orgs",
        repos_url: "https://api.github.com/users/joleyasarthak/repos",
        events_url:
          "https://api.github.com/users/joleyasarthak/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/joleyasarthak/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "joleyasarthak",
          id: 94008935,
          node_id: "U_kgDOBZp2Zw",
          avatar_url: "https://avatars.githubusercontent.com/u/94008935?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/joleyasarthak",
          html_url: "https://github.com/joleyasarthak",
          followers_url: "https://api.github.com/users/joleyasarthak/followers",
          following_url:
            "https://api.github.com/users/joleyasarthak/following{/other_user}",
          gists_url:
            "https://api.github.com/users/joleyasarthak/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/joleyasarthak/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/joleyasarthak/subscriptions",
          organizations_url: "https://api.github.com/users/joleyasarthak/orgs",
          repos_url: "https://api.github.com/users/joleyasarthak/repos",
          events_url:
            "https://api.github.com/users/joleyasarthak/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/joleyasarthak/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 3,
      created_at: "2022-12-17T14:31:07Z",
      updated_at: "2022-12-19T04:14:35Z",
      closed_at: "2022-12-19T04:08:08Z",
      author_association: "CONTRIBUTOR",
      active_lock_reason: null,
      body: '### Play With Python Repository (Proposing new issue)\r\n:red_circle: **Project Title** : Pomodoro App GUI </br>\r\n:red_circle: **Aim** : To make a Pomodoro Timer app using Tkinter</br>\r\n\r\n**********************************************************************************\r\n:red_circle::yellow_circle: **Points to Note :**\r\n\r\n- The issues will be assigned on a first come first serve basis, 1 Issue == 1 PR.\r\n- "Issue Title" and "PR Title should be the same. Include issue number along with it.\r\n- Follow Contributing Guidelines & Code of Conduct before start Contributing.\r\n\r\n***********************************************************************\r\n:white_check_mark: **To be Mentioned while taking the issue :**\r\n- Full name : \r\n- GitHub Profile Link : \r\n- Email ID :\r\n- Participant ID (if applicable):\r\n- Approach for this Project :\r\n- What is your participant role? (Mention the Open Source program)\r\n\r\n*************************************************************\r\nHappy Contributing 🚀 \r\n\r\nAll the best. Enjoy your open source journey ahead. 😎\r\n',
      reactions: {
        url: "https://api.github.com/repos/World-of-ML/Play-With-Python/issues/122/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/World-of-ML/Play-With-Python/issues/122/timeline",
      performed_via_github_app: null,
      state_reason: "completed",
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/N00nDay/stwui/issues/72",
      repository_url: "https://api.github.com/repos/N00nDay/stwui",
      labels_url:
        "https://api.github.com/repos/N00nDay/stwui/issues/72/labels{/name}",
      comments_url:
        "https://api.github.com/repos/N00nDay/stwui/issues/72/comments",
      events_url: "https://api.github.com/repos/N00nDay/stwui/issues/72/events",
      html_url: "https://github.com/N00nDay/stwui/issues/72",
      id: 1499239443,
      node_id: "I_kwDOIF9S0M5ZXJQT",
      number: 72,
      title: "Select inside form automatically submits when changed",
      user: {
        login: "danielpinto8zz6",
        id: 8846362,
        node_id: "MDQ6VXNlcjg4NDYzNjI=",
        avatar_url: "https://avatars.githubusercontent.com/u/8846362?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/danielpinto8zz6",
        html_url: "https://github.com/danielpinto8zz6",
        followers_url: "https://api.github.com/users/danielpinto8zz6/followers",
        following_url:
          "https://api.github.com/users/danielpinto8zz6/following{/other_user}",
        gists_url:
          "https://api.github.com/users/danielpinto8zz6/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/danielpinto8zz6/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/danielpinto8zz6/subscriptions",
        organizations_url: "https://api.github.com/users/danielpinto8zz6/orgs",
        repos_url: "https://api.github.com/users/danielpinto8zz6/repos",
        events_url:
          "https://api.github.com/users/danielpinto8zz6/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/danielpinto8zz6/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4592215380,
          node_id: "LA_kwDOIF9S0M8AAAABEbelVA",
          url: "https://api.github.com/repos/N00nDay/stwui/labels/bug",
          name: "bug",
          color: "d73a4a",
          default: true,
          description: "Something isn't working",
        },
        {
          id: 4708261925,
          node_id: "LA_kwDOIF9S0M8AAAABGKJgJQ",
          url: "https://api.github.com/repos/N00nDay/stwui/labels/assigned",
          name: "assigned",
          color: "DFAA2C",
          default: false,
          description: "Someone has been assigned to this issue",
        },
      ],
      state: "open",
      locked: false,
      assignee: {
        login: "N00nDay",
        id: 28783829,
        node_id: "MDQ6VXNlcjI4NzgzODI5",
        avatar_url: "https://avatars.githubusercontent.com/u/28783829?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/N00nDay",
        html_url: "https://github.com/N00nDay",
        followers_url: "https://api.github.com/users/N00nDay/followers",
        following_url:
          "https://api.github.com/users/N00nDay/following{/other_user}",
        gists_url: "https://api.github.com/users/N00nDay/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/N00nDay/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/N00nDay/subscriptions",
        organizations_url: "https://api.github.com/users/N00nDay/orgs",
        repos_url: "https://api.github.com/users/N00nDay/repos",
        events_url: "https://api.github.com/users/N00nDay/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/N00nDay/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "N00nDay",
          id: 28783829,
          node_id: "MDQ6VXNlcjI4NzgzODI5",
          avatar_url: "https://avatars.githubusercontent.com/u/28783829?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/N00nDay",
          html_url: "https://github.com/N00nDay",
          followers_url: "https://api.github.com/users/N00nDay/followers",
          following_url:
            "https://api.github.com/users/N00nDay/following{/other_user}",
          gists_url: "https://api.github.com/users/N00nDay/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/N00nDay/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/N00nDay/subscriptions",
          organizations_url: "https://api.github.com/users/N00nDay/orgs",
          repos_url: "https://api.github.com/users/N00nDay/repos",
          events_url: "https://api.github.com/users/N00nDay/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/N00nDay/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 1,
      created_at: "2022-12-15T23:10:47Z",
      updated_at: "2022-12-15T23:12:45Z",
      closed_at: null,
      author_association: "NONE",
      active_lock_reason: null,
      body: "When I change a select value inside a form, it automatically submits the form, is this the expected behaviour?",
      reactions: {
        url: "https://api.github.com/repos/N00nDay/stwui/issues/72/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/N00nDay/stwui/issues/72/timeline",
      performed_via_github_app: null,
      state_reason: null,
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/7",
      repository_url:
        "https://api.github.com/repos/KonstantinovEgor/friendly-learning",
      labels_url:
        "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/7/labels{/name}",
      comments_url:
        "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/7/comments",
      events_url:
        "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/7/events",
      html_url:
        "https://github.com/KonstantinovEgor/friendly-learning/issues/7",
      id: 1498079555,
      node_id: "I_kwDOIl4gYc5ZSuFD",
      number: 7,
      title: "TL-00006 Максимальная последовательность одинаковых чисел",
      user: {
        login: "KonstantinovEgor",
        id: 75908222,
        node_id: "MDQ6VXNlcjc1OTA4MjIy",
        avatar_url: "https://avatars.githubusercontent.com/u/75908222?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/KonstantinovEgor",
        html_url: "https://github.com/KonstantinovEgor",
        followers_url:
          "https://api.github.com/users/KonstantinovEgor/followers",
        following_url:
          "https://api.github.com/users/KonstantinovEgor/following{/other_user}",
        gists_url:
          "https://api.github.com/users/KonstantinovEgor/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/KonstantinovEgor/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/KonstantinovEgor/subscriptions",
        organizations_url: "https://api.github.com/users/KonstantinovEgor/orgs",
        repos_url: "https://api.github.com/users/KonstantinovEgor/repos",
        events_url:
          "https://api.github.com/users/KonstantinovEgor/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/KonstantinovEgor/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4901000832,
          node_id: "LA_kwDOIl4gYc8AAAABJB9WgA",
          url: "https://api.github.com/repos/KonstantinovEgor/friendly-learning/labels/TASK",
          name: "TASK",
          color: "FBCA04",
          default: false,
          description: "Задание",
        },
        {
          id: 4901005286,
          node_id: "LA_kwDOIl4gYc8AAAABJB9n5g",
          url: "https://api.github.com/repos/KonstantinovEgor/friendly-learning/labels/COMPLETED",
          name: "COMPLETED",
          color: "0E8A16",
          default: false,
          description: "Задание выполнено",
        },
        {
          id: 4901007108,
          node_id: "LA_kwDOIl4gYc8AAAABJB9vBA",
          url: "https://api.github.com/repos/KonstantinovEgor/friendly-learning/labels/ASSIGNED",
          name: "ASSIGNED",
          color: "C5DEF5",
          default: false,
          description: "Задание назначено",
        },
      ],
      state: "closed",
      locked: false,
      assignee: {
        login: "Laffuru",
        id: 111848685,
        node_id: "U_kgDOBqqs7Q",
        avatar_url: "https://avatars.githubusercontent.com/u/111848685?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Laffuru",
        html_url: "https://github.com/Laffuru",
        followers_url: "https://api.github.com/users/Laffuru/followers",
        following_url:
          "https://api.github.com/users/Laffuru/following{/other_user}",
        gists_url: "https://api.github.com/users/Laffuru/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Laffuru/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/Laffuru/subscriptions",
        organizations_url: "https://api.github.com/users/Laffuru/orgs",
        repos_url: "https://api.github.com/users/Laffuru/repos",
        events_url: "https://api.github.com/users/Laffuru/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Laffuru/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "Laffuru",
          id: 111848685,
          node_id: "U_kgDOBqqs7Q",
          avatar_url: "https://avatars.githubusercontent.com/u/111848685?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Laffuru",
          html_url: "https://github.com/Laffuru",
          followers_url: "https://api.github.com/users/Laffuru/followers",
          following_url:
            "https://api.github.com/users/Laffuru/following{/other_user}",
          gists_url: "https://api.github.com/users/Laffuru/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Laffuru/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Laffuru/subscriptions",
          organizations_url: "https://api.github.com/users/Laffuru/orgs",
          repos_url: "https://api.github.com/users/Laffuru/repos",
          events_url: "https://api.github.com/users/Laffuru/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Laffuru/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "Vyacheslav-Ilyinets",
          id: 120257687,
          node_id: "U_kgDOByr8lw",
          avatar_url: "https://avatars.githubusercontent.com/u/120257687?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Vyacheslav-Ilyinets",
          html_url: "https://github.com/Vyacheslav-Ilyinets",
          followers_url:
            "https://api.github.com/users/Vyacheslav-Ilyinets/followers",
          following_url:
            "https://api.github.com/users/Vyacheslav-Ilyinets/following{/other_user}",
          gists_url:
            "https://api.github.com/users/Vyacheslav-Ilyinets/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Vyacheslav-Ilyinets/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Vyacheslav-Ilyinets/subscriptions",
          organizations_url:
            "https://api.github.com/users/Vyacheslav-Ilyinets/orgs",
          repos_url: "https://api.github.com/users/Vyacheslav-Ilyinets/repos",
          events_url:
            "https://api.github.com/users/Vyacheslav-Ilyinets/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Vyacheslav-Ilyinets/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 0,
      created_at: "2022-12-15T09:19:53Z",
      updated_at: "2022-12-19T19:09:16Z",
      closed_at: "2022-12-19T19:09:16Z",
      author_association: "OWNER",
      active_lock_reason: null,
      body: "Написать функцию getMaxNumberOfConsecutiveElements(arr). Функция занимается поиском максимальной последовательности подряд идущих одинаковых элементов массива и результатом возвращает длину этой последовательности.\r\n\r\n- Массив для поиска считывается из файла `array.txt`\r\n- Результат записывается в файл `result.txt`\r\n- Метод `getMaxNumberOfConsecutiveElements(arr)` реализовать в отдельном файле\r\n\r\n> Для работы с файлами использовать встроенную библиотеку `fs`",
      reactions: {
        url: "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/7/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/7/timeline",
      performed_via_github_app: null,
      state_reason: "completed",
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/6",
      repository_url:
        "https://api.github.com/repos/KonstantinovEgor/friendly-learning",
      labels_url:
        "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/6/labels{/name}",
      comments_url:
        "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/6/comments",
      events_url:
        "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/6/events",
      html_url:
        "https://github.com/KonstantinovEgor/friendly-learning/issues/6",
      id: 1498052195,
      node_id: "I_kwDOIl4gYc5ZSnZj",
      number: 6,
      title: "TL-00005 Запросы на получение пользователей.",
      user: {
        login: "KonstantinovEgor",
        id: 75908222,
        node_id: "MDQ6VXNlcjc1OTA4MjIy",
        avatar_url: "https://avatars.githubusercontent.com/u/75908222?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/KonstantinovEgor",
        html_url: "https://github.com/KonstantinovEgor",
        followers_url:
          "https://api.github.com/users/KonstantinovEgor/followers",
        following_url:
          "https://api.github.com/users/KonstantinovEgor/following{/other_user}",
        gists_url:
          "https://api.github.com/users/KonstantinovEgor/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/KonstantinovEgor/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/KonstantinovEgor/subscriptions",
        organizations_url: "https://api.github.com/users/KonstantinovEgor/orgs",
        repos_url: "https://api.github.com/users/KonstantinovEgor/repos",
        events_url:
          "https://api.github.com/users/KonstantinovEgor/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/KonstantinovEgor/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4901000832,
          node_id: "LA_kwDOIl4gYc8AAAABJB9WgA",
          url: "https://api.github.com/repos/KonstantinovEgor/friendly-learning/labels/TASK",
          name: "TASK",
          color: "FBCA04",
          default: false,
          description: "Задание",
        },
        {
          id: 4901007108,
          node_id: "LA_kwDOIl4gYc8AAAABJB9vBA",
          url: "https://api.github.com/repos/KonstantinovEgor/friendly-learning/labels/ASSIGNED",
          name: "ASSIGNED",
          color: "C5DEF5",
          default: false,
          description: "Задание назначено",
        },
      ],
      state: "closed",
      locked: false,
      assignee: {
        login: "rodnikovlad",
        id: 96655500,
        node_id: "U_kgDOBcLYjA",
        avatar_url: "https://avatars.githubusercontent.com/u/96655500?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/rodnikovlad",
        html_url: "https://github.com/rodnikovlad",
        followers_url: "https://api.github.com/users/rodnikovlad/followers",
        following_url:
          "https://api.github.com/users/rodnikovlad/following{/other_user}",
        gists_url: "https://api.github.com/users/rodnikovlad/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/rodnikovlad/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/rodnikovlad/subscriptions",
        organizations_url: "https://api.github.com/users/rodnikovlad/orgs",
        repos_url: "https://api.github.com/users/rodnikovlad/repos",
        events_url: "https://api.github.com/users/rodnikovlad/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/rodnikovlad/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "rodnikovlad",
          id: 96655500,
          node_id: "U_kgDOBcLYjA",
          avatar_url: "https://avatars.githubusercontent.com/u/96655500?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/rodnikovlad",
          html_url: "https://github.com/rodnikovlad",
          followers_url: "https://api.github.com/users/rodnikovlad/followers",
          following_url:
            "https://api.github.com/users/rodnikovlad/following{/other_user}",
          gists_url: "https://api.github.com/users/rodnikovlad/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/rodnikovlad/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/rodnikovlad/subscriptions",
          organizations_url: "https://api.github.com/users/rodnikovlad/orgs",
          repos_url: "https://api.github.com/users/rodnikovlad/repos",
          events_url:
            "https://api.github.com/users/rodnikovlad/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/rodnikovlad/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 0,
      created_at: "2022-12-15T09:04:14Z",
      updated_at: "2022-12-19T19:09:30Z",
      closed_at: "2022-12-19T19:09:30Z",
      author_association: "OWNER",
      active_lock_reason: null,
      body: "Дополнить сервис авторизации запросами: \r\n- Получение всех пользователей; \r\n- Получение одного пользователя.\r\n\r\nБолее подробная [информация ](https://github.com/KonstantinovEgor/friendly-learning/wiki/Базы-данных)о запросах.",
      reactions: {
        url: "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/6/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/6/timeline",
      performed_via_github_app: null,
      state_reason: "completed",
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/8",
      repository_url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint",
      labels_url:
        "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/8/labels{/name}",
      comments_url:
        "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/8/comments",
      events_url:
        "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/8/events",
      html_url: "https://github.com/prathimacode-hub/Dev-Mint/issues/8",
      id: 1497719061,
      node_id: "I_kwDOIJTq2M5ZRWEV",
      number: 8,
      title: "Title:  Add Javascript Quiz App",
      user: {
        login: "SattyamSamania",
        id: 67833888,
        node_id: "MDQ6VXNlcjY3ODMzODg4",
        avatar_url: "https://avatars.githubusercontent.com/u/67833888?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/SattyamSamania",
        html_url: "https://github.com/SattyamSamania",
        followers_url: "https://api.github.com/users/SattyamSamania/followers",
        following_url:
          "https://api.github.com/users/SattyamSamania/following{/other_user}",
        gists_url:
          "https://api.github.com/users/SattyamSamania/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/SattyamSamania/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/SattyamSamania/subscriptions",
        organizations_url: "https://api.github.com/users/SattyamSamania/orgs",
        repos_url: "https://api.github.com/users/SattyamSamania/repos",
        events_url:
          "https://api.github.com/users/SattyamSamania/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/SattyamSamania/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4877210171,
          node_id: "LA_kwDOIJTq2M8AAAABIrRSOw",
          url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint/labels/Assigned",
          name: "Assigned",
          color: "E8779F",
          default: false,
          description: "This issue is assigned for CodePeak'22",
        },
      ],
      state: "open",
      locked: false,
      assignee: {
        login: "SattyamSamania",
        id: 67833888,
        node_id: "MDQ6VXNlcjY3ODMzODg4",
        avatar_url: "https://avatars.githubusercontent.com/u/67833888?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/SattyamSamania",
        html_url: "https://github.com/SattyamSamania",
        followers_url: "https://api.github.com/users/SattyamSamania/followers",
        following_url:
          "https://api.github.com/users/SattyamSamania/following{/other_user}",
        gists_url:
          "https://api.github.com/users/SattyamSamania/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/SattyamSamania/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/SattyamSamania/subscriptions",
        organizations_url: "https://api.github.com/users/SattyamSamania/orgs",
        repos_url: "https://api.github.com/users/SattyamSamania/repos",
        events_url:
          "https://api.github.com/users/SattyamSamania/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/SattyamSamania/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "SattyamSamania",
          id: 67833888,
          node_id: "MDQ6VXNlcjY3ODMzODg4",
          avatar_url: "https://avatars.githubusercontent.com/u/67833888?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/SattyamSamania",
          html_url: "https://github.com/SattyamSamania",
          followers_url:
            "https://api.github.com/users/SattyamSamania/followers",
          following_url:
            "https://api.github.com/users/SattyamSamania/following{/other_user}",
          gists_url:
            "https://api.github.com/users/SattyamSamania/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/SattyamSamania/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/SattyamSamania/subscriptions",
          organizations_url: "https://api.github.com/users/SattyamSamania/orgs",
          repos_url: "https://api.github.com/users/SattyamSamania/repos",
          events_url:
            "https://api.github.com/users/SattyamSamania/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/SattyamSamania/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 2,
      created_at: "2022-12-15T03:17:50Z",
      updated_at: "2022-12-26T13:23:27Z",
      closed_at: null,
      author_association: "NONE",
      active_lock_reason: null,
      body: "### Are you a CodePeak participant?\n\nYes. My name is Sattyam Samania.\n\n### Is your feature request related to a problem? Please describe.\n\nNo.\n\n### Describe the solution you'd like.\n\nI would like to add a Javascript Quiz App made with HTML, CSS and Javascript. If you think this would be helpful contribution kindly assign this issue to me. Thank you! \n\n### Describe alternatives you've considered.\n\nNo.\n\n### Add any other context or screenshots about the feature request here.\n\n![Screenshot (269)](https://user-images.githubusercontent.com/67833888/207764414-fb05fb19-eee6-493f-9acb-e9c37ce22a84.png)\r\n",
      reactions: {
        url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/8/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/8/timeline",
      performed_via_github_app: null,
      state_reason: null,
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/5",
      repository_url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint",
      labels_url:
        "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/5/labels{/name}",
      comments_url:
        "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/5/comments",
      events_url:
        "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/5/events",
      html_url: "https://github.com/prathimacode-hub/Dev-Mint/issues/5",
      id: 1497034650,
      node_id: "I_kwDOIJTq2M5ZOu-a",
      number: 5,
      title: "Chrome Extension : BMI Calculator",
      user: {
        login: "prathimacode-hub",
        id: 74645302,
        node_id: "MDQ6VXNlcjc0NjQ1MzAy",
        avatar_url: "https://avatars.githubusercontent.com/u/74645302?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/prathimacode-hub",
        html_url: "https://github.com/prathimacode-hub",
        followers_url:
          "https://api.github.com/users/prathimacode-hub/followers",
        following_url:
          "https://api.github.com/users/prathimacode-hub/following{/other_user}",
        gists_url:
          "https://api.github.com/users/prathimacode-hub/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/prathimacode-hub/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/prathimacode-hub/subscriptions",
        organizations_url: "https://api.github.com/users/prathimacode-hub/orgs",
        repos_url: "https://api.github.com/users/prathimacode-hub/repos",
        events_url:
          "https://api.github.com/users/prathimacode-hub/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/prathimacode-hub/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4877210171,
          node_id: "LA_kwDOIJTq2M8AAAABIrRSOw",
          url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint/labels/Assigned",
          name: "Assigned",
          color: "E8779F",
          default: false,
          description: "This issue is assigned for CodePeak'22",
        },
      ],
      state: "open",
      locked: false,
      assignee: {
        login: "Tushar98644",
        id: 107763774,
        node_id: "U_kgDOBmxYPg",
        avatar_url: "https://avatars.githubusercontent.com/u/107763774?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Tushar98644",
        html_url: "https://github.com/Tushar98644",
        followers_url: "https://api.github.com/users/Tushar98644/followers",
        following_url:
          "https://api.github.com/users/Tushar98644/following{/other_user}",
        gists_url: "https://api.github.com/users/Tushar98644/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Tushar98644/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Tushar98644/subscriptions",
        organizations_url: "https://api.github.com/users/Tushar98644/orgs",
        repos_url: "https://api.github.com/users/Tushar98644/repos",
        events_url: "https://api.github.com/users/Tushar98644/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Tushar98644/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "Tushar98644",
          id: 107763774,
          node_id: "U_kgDOBmxYPg",
          avatar_url: "https://avatars.githubusercontent.com/u/107763774?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Tushar98644",
          html_url: "https://github.com/Tushar98644",
          followers_url: "https://api.github.com/users/Tushar98644/followers",
          following_url:
            "https://api.github.com/users/Tushar98644/following{/other_user}",
          gists_url: "https://api.github.com/users/Tushar98644/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Tushar98644/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Tushar98644/subscriptions",
          organizations_url: "https://api.github.com/users/Tushar98644/orgs",
          repos_url: "https://api.github.com/users/Tushar98644/repos",
          events_url:
            "https://api.github.com/users/Tushar98644/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Tushar98644/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 2,
      created_at: "2022-12-14T16:54:42Z",
      updated_at: "2022-12-14T19:02:42Z",
      closed_at: null,
      author_association: "OWNER",
      active_lock_reason: null,
      body: "Hey KWOC participants, good to see you.\r\n\r\nThis issue's goal is to calculate the BMI by taking input attributes like height, weight etc.\r\n\r\nHow to get it approved?\r\n\r\n- Add a screenshot and video of outlook on this thread and wait for one of the mentors to get back to you.\r\n- Once it's approved, go ahead and make pr.\r\n\r\nThings to add along for expressing your interest over an issue : \r\n\r\nFull Name :\r\nAre you a CodePeak participant :\r\nTech Stacks you will use :\r\nCategory it belongs to in this repo :\r\nDescribe the solution or approach you will follow for this issue :",
      reactions: {
        url: "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/5/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/prathimacode-hub/Dev-Mint/issues/5/timeline",
      performed_via_github_app: null,
      state_reason: null,
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/5",
      repository_url:
        "https://api.github.com/repos/KonstantinovEgor/friendly-learning",
      labels_url:
        "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/5/labels{/name}",
      comments_url:
        "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/5/comments",
      events_url:
        "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/5/events",
      html_url:
        "https://github.com/KonstantinovEgor/friendly-learning/issues/5",
      id: 1493707271,
      node_id: "I_kwDOIl4gYc5ZCCoH",
      number: 5,
      title: "TL-00004 Доработка сервиса авторизации",
      user: {
        login: "KonstantinovEgor",
        id: 75908222,
        node_id: "MDQ6VXNlcjc1OTA4MjIy",
        avatar_url: "https://avatars.githubusercontent.com/u/75908222?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/KonstantinovEgor",
        html_url: "https://github.com/KonstantinovEgor",
        followers_url:
          "https://api.github.com/users/KonstantinovEgor/followers",
        following_url:
          "https://api.github.com/users/KonstantinovEgor/following{/other_user}",
        gists_url:
          "https://api.github.com/users/KonstantinovEgor/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/KonstantinovEgor/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/KonstantinovEgor/subscriptions",
        organizations_url: "https://api.github.com/users/KonstantinovEgor/orgs",
        repos_url: "https://api.github.com/users/KonstantinovEgor/repos",
        events_url:
          "https://api.github.com/users/KonstantinovEgor/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/KonstantinovEgor/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4901000832,
          node_id: "LA_kwDOIl4gYc8AAAABJB9WgA",
          url: "https://api.github.com/repos/KonstantinovEgor/friendly-learning/labels/TASK",
          name: "TASK",
          color: "FBCA04",
          default: false,
          description: "Задание",
        },
        {
          id: 4901007108,
          node_id: "LA_kwDOIl4gYc8AAAABJB9vBA",
          url: "https://api.github.com/repos/KonstantinovEgor/friendly-learning/labels/ASSIGNED",
          name: "ASSIGNED",
          color: "C5DEF5",
          default: false,
          description: "Задание назначено",
        },
      ],
      state: "closed",
      locked: false,
      assignee: {
        login: "rodnikovlad",
        id: 96655500,
        node_id: "U_kgDOBcLYjA",
        avatar_url: "https://avatars.githubusercontent.com/u/96655500?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/rodnikovlad",
        html_url: "https://github.com/rodnikovlad",
        followers_url: "https://api.github.com/users/rodnikovlad/followers",
        following_url:
          "https://api.github.com/users/rodnikovlad/following{/other_user}",
        gists_url: "https://api.github.com/users/rodnikovlad/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/rodnikovlad/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/rodnikovlad/subscriptions",
        organizations_url: "https://api.github.com/users/rodnikovlad/orgs",
        repos_url: "https://api.github.com/users/rodnikovlad/repos",
        events_url: "https://api.github.com/users/rodnikovlad/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/rodnikovlad/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "rodnikovlad",
          id: 96655500,
          node_id: "U_kgDOBcLYjA",
          avatar_url: "https://avatars.githubusercontent.com/u/96655500?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/rodnikovlad",
          html_url: "https://github.com/rodnikovlad",
          followers_url: "https://api.github.com/users/rodnikovlad/followers",
          following_url:
            "https://api.github.com/users/rodnikovlad/following{/other_user}",
          gists_url: "https://api.github.com/users/rodnikovlad/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/rodnikovlad/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/rodnikovlad/subscriptions",
          organizations_url: "https://api.github.com/users/rodnikovlad/orgs",
          repos_url: "https://api.github.com/users/rodnikovlad/repos",
          events_url:
            "https://api.github.com/users/rodnikovlad/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/rodnikovlad/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "Laffuru",
          id: 111848685,
          node_id: "U_kgDOBqqs7Q",
          avatar_url: "https://avatars.githubusercontent.com/u/111848685?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Laffuru",
          html_url: "https://github.com/Laffuru",
          followers_url: "https://api.github.com/users/Laffuru/followers",
          following_url:
            "https://api.github.com/users/Laffuru/following{/other_user}",
          gists_url: "https://api.github.com/users/Laffuru/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Laffuru/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Laffuru/subscriptions",
          organizations_url: "https://api.github.com/users/Laffuru/orgs",
          repos_url: "https://api.github.com/users/Laffuru/repos",
          events_url: "https://api.github.com/users/Laffuru/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Laffuru/received_events",
          type: "User",
          site_admin: false,
        },
        {
          login: "Vyacheslav-Ilyinets",
          id: 120257687,
          node_id: "U_kgDOByr8lw",
          avatar_url: "https://avatars.githubusercontent.com/u/120257687?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Vyacheslav-Ilyinets",
          html_url: "https://github.com/Vyacheslav-Ilyinets",
          followers_url:
            "https://api.github.com/users/Vyacheslav-Ilyinets/followers",
          following_url:
            "https://api.github.com/users/Vyacheslav-Ilyinets/following{/other_user}",
          gists_url:
            "https://api.github.com/users/Vyacheslav-Ilyinets/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Vyacheslav-Ilyinets/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Vyacheslav-Ilyinets/subscriptions",
          organizations_url:
            "https://api.github.com/users/Vyacheslav-Ilyinets/orgs",
          repos_url: "https://api.github.com/users/Vyacheslav-Ilyinets/repos",
          events_url:
            "https://api.github.com/users/Vyacheslav-Ilyinets/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Vyacheslav-Ilyinets/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 1,
      created_at: "2022-12-13T08:39:17Z",
      updated_at: "2022-12-15T09:05:41Z",
      closed_at: "2022-12-15T09:05:41Z",
      author_association: "OWNER",
      active_lock_reason: null,
      body: "Дополнить сервис авторизации автоматическим созданием `user_id`.",
      reactions: {
        url: "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/5/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/KonstantinovEgor/friendly-learning/issues/5/timeline",
      performed_via_github_app: null,
      state_reason: "completed",
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/arpitghura/typing-test/issues/70",
      repository_url: "https://api.github.com/repos/arpitghura/typing-test",
      labels_url:
        "https://api.github.com/repos/arpitghura/typing-test/issues/70/labels{/name}",
      comments_url:
        "https://api.github.com/repos/arpitghura/typing-test/issues/70/comments",
      events_url:
        "https://api.github.com/repos/arpitghura/typing-test/issues/70/events",
      html_url: "https://github.com/arpitghura/typing-test/issues/70",
      id: 1492634276,
      node_id: "I_kwDOHxt7t85Y98qk",
      number: 70,
      title: "[FEATURE] Improve the content of About Us Page",
      user: {
        login: "arpitghura",
        id: 41796013,
        node_id: "MDQ6VXNlcjQxNzk2MDEz",
        avatar_url: "https://avatars.githubusercontent.com/u/41796013?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/arpitghura",
        html_url: "https://github.com/arpitghura",
        followers_url: "https://api.github.com/users/arpitghura/followers",
        following_url:
          "https://api.github.com/users/arpitghura/following{/other_user}",
        gists_url: "https://api.github.com/users/arpitghura/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/arpitghura/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/arpitghura/subscriptions",
        organizations_url: "https://api.github.com/users/arpitghura/orgs",
        repos_url: "https://api.github.com/users/arpitghura/repos",
        events_url: "https://api.github.com/users/arpitghura/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/arpitghura/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4399904503,
          node_id: "LA_kwDOHxt7t88AAAABBkE29w",
          url: "https://api.github.com/repos/arpitghura/typing-test/labels/enhancement",
          name: "enhancement",
          color: "a2eeef",
          default: true,
          description: "New feature or request",
        },
        {
          id: 4399904505,
          node_id: "LA_kwDOHxt7t88AAAABBkE2-Q",
          url: "https://api.github.com/repos/arpitghura/typing-test/labels/good%20first%20issue",
          name: "good first issue",
          color: "7057ff",
          default: true,
          description: "Good for newcomers",
        },
        {
          id: 4652700751,
          node_id: "LA_kwDOHxt7t88AAAABFVKUTw",
          url: "https://api.github.com/repos/arpitghura/typing-test/labels/assigned",
          name: "assigned",
          color: "C3F519",
          default: false,
          description: "Issue assigned",
        },
      ],
      state: "closed",
      locked: false,
      assignee: {
        login: "amitsethii",
        id: 49728020,
        node_id: "MDQ6VXNlcjQ5NzI4MDIw",
        avatar_url: "https://avatars.githubusercontent.com/u/49728020?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/amitsethii",
        html_url: "https://github.com/amitsethii",
        followers_url: "https://api.github.com/users/amitsethii/followers",
        following_url:
          "https://api.github.com/users/amitsethii/following{/other_user}",
        gists_url: "https://api.github.com/users/amitsethii/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/amitsethii/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/amitsethii/subscriptions",
        organizations_url: "https://api.github.com/users/amitsethii/orgs",
        repos_url: "https://api.github.com/users/amitsethii/repos",
        events_url: "https://api.github.com/users/amitsethii/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/amitsethii/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "amitsethii",
          id: 49728020,
          node_id: "MDQ6VXNlcjQ5NzI4MDIw",
          avatar_url: "https://avatars.githubusercontent.com/u/49728020?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/amitsethii",
          html_url: "https://github.com/amitsethii",
          followers_url: "https://api.github.com/users/amitsethii/followers",
          following_url:
            "https://api.github.com/users/amitsethii/following{/other_user}",
          gists_url: "https://api.github.com/users/amitsethii/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/amitsethii/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/amitsethii/subscriptions",
          organizations_url: "https://api.github.com/users/amitsethii/orgs",
          repos_url: "https://api.github.com/users/amitsethii/repos",
          events_url:
            "https://api.github.com/users/amitsethii/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/amitsethii/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 4,
      created_at: "2022-12-12T19:51:21Z",
      updated_at: "2022-12-15T13:18:35Z",
      closed_at: "2022-12-15T13:18:34Z",
      author_association: "OWNER",
      active_lock_reason: null,
      body: "**Describe the solution you'd like**\r\nThe content available on about us page is not looking professional. Make some changes to the content and also fix the alignment of the content.\r\n\r\nCurrently the content is badly formatted and also not aligned properly. \r\n![image](https://user-images.githubusercontent.com/41796013/207140636-84f2800a-22fc-415c-b1d7-428207a1447d.png)\r\n",
      reactions: {
        url: "https://api.github.com/repos/arpitghura/typing-test/issues/70/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/arpitghura/typing-test/issues/70/timeline",
      performed_via_github_app: null,
      state_reason: "completed",
      score: 1.0,
    },
    {
      url: "https://api.github.com/repos/arpitghura/typing-test/issues/69",
      repository_url: "https://api.github.com/repos/arpitghura/typing-test",
      labels_url:
        "https://api.github.com/repos/arpitghura/typing-test/issues/69/labels{/name}",
      comments_url:
        "https://api.github.com/repos/arpitghura/typing-test/issues/69/comments",
      events_url:
        "https://api.github.com/repos/arpitghura/typing-test/issues/69/events",
      html_url: "https://github.com/arpitghura/typing-test/issues/69",
      id: 1492626248,
      node_id: "I_kwDOHxt7t85Y96tI",
      number: 69,
      title:
        "[BUG] Improper Alignment of Footer Content on Profile and Practice Page on Smartphones",
      user: {
        login: "arpitghura",
        id: 41796013,
        node_id: "MDQ6VXNlcjQxNzk2MDEz",
        avatar_url: "https://avatars.githubusercontent.com/u/41796013?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/arpitghura",
        html_url: "https://github.com/arpitghura",
        followers_url: "https://api.github.com/users/arpitghura/followers",
        following_url:
          "https://api.github.com/users/arpitghura/following{/other_user}",
        gists_url: "https://api.github.com/users/arpitghura/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/arpitghura/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/arpitghura/subscriptions",
        organizations_url: "https://api.github.com/users/arpitghura/orgs",
        repos_url: "https://api.github.com/users/arpitghura/repos",
        events_url: "https://api.github.com/users/arpitghura/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/arpitghura/received_events",
        type: "User",
        site_admin: false,
      },
      labels: [
        {
          id: 4399904500,
          node_id: "LA_kwDOHxt7t88AAAABBkE29A",
          url: "https://api.github.com/repos/arpitghura/typing-test/labels/bug",
          name: "bug",
          color: "d73a4a",
          default: true,
          description: "Something isn't working",
        },
        {
          id: 4399904505,
          node_id: "LA_kwDOHxt7t88AAAABBkE2-Q",
          url: "https://api.github.com/repos/arpitghura/typing-test/labels/good%20first%20issue",
          name: "good first issue",
          color: "7057ff",
          default: true,
          description: "Good for newcomers",
        },
        {
          id: 4652700751,
          node_id: "LA_kwDOHxt7t88AAAABFVKUTw",
          url: "https://api.github.com/repos/arpitghura/typing-test/labels/assigned",
          name: "assigned",
          color: "C3F519",
          default: false,
          description: "Issue assigned",
        },
        {
          id: 4896043494,
          node_id: "LA_kwDOHxt7t88AAAABI9Ox5g",
          url: "https://api.github.com/repos/arpitghura/typing-test/labels/kwoc",
          name: "kwoc",
          color: "0a72ef",
          default: false,
          description: "issue/PR created under KWoC 2022",
        },
      ],
      state: "closed",
      locked: false,
      assignee: {
        login: "Nupoor10",
        id: 92589912,
        node_id: "U_kgDOBYTPWA",
        avatar_url: "https://avatars.githubusercontent.com/u/92589912?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Nupoor10",
        html_url: "https://github.com/Nupoor10",
        followers_url: "https://api.github.com/users/Nupoor10/followers",
        following_url:
          "https://api.github.com/users/Nupoor10/following{/other_user}",
        gists_url: "https://api.github.com/users/Nupoor10/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Nupoor10/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Nupoor10/subscriptions",
        organizations_url: "https://api.github.com/users/Nupoor10/orgs",
        repos_url: "https://api.github.com/users/Nupoor10/repos",
        events_url: "https://api.github.com/users/Nupoor10/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Nupoor10/received_events",
        type: "User",
        site_admin: false,
      },
      assignees: [
        {
          login: "Nupoor10",
          id: 92589912,
          node_id: "U_kgDOBYTPWA",
          avatar_url: "https://avatars.githubusercontent.com/u/92589912?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Nupoor10",
          html_url: "https://github.com/Nupoor10",
          followers_url: "https://api.github.com/users/Nupoor10/followers",
          following_url:
            "https://api.github.com/users/Nupoor10/following{/other_user}",
          gists_url: "https://api.github.com/users/Nupoor10/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Nupoor10/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Nupoor10/subscriptions",
          organizations_url: "https://api.github.com/users/Nupoor10/orgs",
          repos_url: "https://api.github.com/users/Nupoor10/repos",
          events_url: "https://api.github.com/users/Nupoor10/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Nupoor10/received_events",
          type: "User",
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 3,
      created_at: "2022-12-12T19:48:14Z",
      updated_at: "2022-12-15T13:18:00Z",
      closed_at: "2022-12-15T13:18:00Z",
      author_association: "OWNER",
      active_lock_reason: null,
      body: "**Describe the bug**\r\nImproper Alignment of Footer Content on Profile and Practice Page on Smartphones.\r\n\r\n**To Reproduce**\r\nSteps to reproduce the behavior:\r\n1. Go to practice.html\r\n2. Scroll down to footer section\r\n3. See error\r\n\r\n**Expected behavior**\r\nThe Footer content should be center aligned with relatively small font size similar to footer on index.html\r\n\r\n**Screenshots**\r\n![image](https://user-images.githubusercontent.com/41796013/207139927-35e3da98-e44c-4261-9741-2b7e4a369c80.png)\r\n\r\n\r\n**Expected Solution**\r\nThis bug can be solved by checking the CSS of footer content for the media queries of smartphones.\r\n",
      reactions: {
        url: "https://api.github.com/repos/arpitghura/typing-test/issues/69/reactions",
        total_count: 0,
        "+1": 0,
        "-1": 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        "https://api.github.com/repos/arpitghura/typing-test/issues/69/timeline",
      performed_via_github_app: null,
      state_reason: "completed",
      score: 1.0,
    },
  ],
};

export default issues;
