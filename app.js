const defaultFocuses = [
  {
    id: "creation",
    label: "Theme 1",
    mark: "C",
    title: "Creation",
    description: "According to the Genesis narrative, God's creative work unfolds from creation through paradise lost.",
    days: [
      ["Day 1", "Creation of light", "Genesis 1:1-5", "God creates light and separates it from darkness, establishing day and night."],
      ["Day 2", "Creation of the sky", "Genesis 1:6-8", "God creates the vault to separate the waters above from the waters below."],
      ["Day 3", "Dry land and vegetation", "Genesis 1:9-13", "God forms dry land and fills it with plants and fruit trees."],
      ["Day 4", "Lights in the sky", "Genesis 1:14-19", "God appoints the sun, moon, and stars to govern days, years, and seasons."],
      ["Day 5", "Sea creatures and birds", "Genesis 1:20-23", "God fills the waters and skies with living creatures."],
      ["Day 6", "Animals and humanity", "Genesis 1:24-31", "God creates land animals and humans, male and female, in His image."],
      ["Day 7", "God rests", "Genesis 2:1-4", "God rests, blesses the seventh day, and makes it holy."],
      ["Day 8", "Creation of man", "Genesis 2:5-9", "God forms man and places him in the garden with the breath of life."],
      ["Day 9", "River of Eden", "Genesis 2:10-17", "The garden is described with its river, abundance, and God's command."],
      ["Day 10", "Creation of woman", "Genesis 2:18-25", "God creates woman as a fitting helper and establishes human companionship."],
      ["Day 11", "Sin", "Genesis 3:1-7", "The man and woman disobey God, and sin enters the human story."],
      ["Day 12", "God confronts man and woman", "Genesis 3:8-13", "The Lord God seeks them, questions them, and exposes their hiding and blame."],
      ["Day 13", "God confronts the serpent", "Genesis 3:14-19", "God judges the serpent and describes the painful consequences of sin."],
      ["Day 14", "Paradise lost", "Genesis 3:20-24", "The man and woman are sent from Eden, and the way to the tree of life is guarded."]
    ]
  },
  {
    id: "fall-corruption",
    label: "Theme 2",
    mark: "F",
    title: "Fall and Corruption",
    description: "Sin brings moral decay, pain, labor, physical death, and broken relationships with God, revealing humanity's need for redemption.",
    days: [
      ["Day 15", "Cain and Abel", "Genesis 4:1-15", "The first family experiences jealousy, violence, judgment, and mercy."],
      ["Day 16", "Descendants", "Genesis 4:17-26 and 5:1-32", "The generations unfold, showing both human culture and the spread of death."],
      ["Day 17", "A world gone wrong", "Genesis 6:1-8", "Human wickedness grows, yet Noah finds favor in the eyes of the Lord."],
      ["Day 18", "Noah", "Genesis 6:9-22", "God calls Noah to faithful obedience and gives instructions for the ark."],
      ["Day 19", "The flood", "Genesis 7:1-24", "Judgment comes through the flood, and God preserves Noah and those with him."],
      ["Day 20", "The flood recedes", "Genesis 8:1-22", "The waters recede, Noah worships, and God receives his offering."],
      ["Day 21", "God confirms His covenant", "Genesis 9:1-29", "God blesses Noah, gives the covenant sign, and the story continues with human weakness."]
    ]
  },
  {
    id: "redemption",
    label: "Theme 3",
    mark: "R",
    title: "Redemption",
    description: "God buys back humanity from slavery to sin and death through the sacrificial blood of Jesus Christ, restoring people to right relationship with Him.",
    days: [
      ["Day 1", "Promises of Deliverance", "Exodus 6:2-8", "God promises to redeem His people with an outstretched arm."],
      ["Day 2", "My Redeemer Lives", "Job 19:25", "Hope clings to the living Redeemer even in suffering."],
      ["Day 3", "Hope in the Lord", "Psalm 130:7", "The Lord is full of steadfast love and plentiful redemption."],
      ["Day 4", "Spiritual Blessings", "Ephesians 1:7-8", "In Christ we have redemption through His blood and forgiveness of sins."],
      ["Day 5", "Christ Took Our Punishment", "Romans 3:22-25", "God presents Christ as the sacrifice of atonement received by faith."],
      ["Day 6", "Rescued from Darkness", "Colossians 1:13-14", "God transfers His people from darkness into the kingdom of His Son."],
      ["Day 7", "Rescued from Curse", "Galatians 3:13-14", "Christ redeems us from the curse so the blessing may come through Him."],
      ["Day 8", "God Paid a Ransom", "1 Peter 1:18-19", "We are redeemed with the precious blood of Christ."],
      ["Day 9", "To Make Us His Own", "Titus 2:14", "Jesus gives Himself to redeem and purify a people for His possession."],
      ["Day 10", "With His Own Blood", "Hebrews 9:12", "Christ secures eternal redemption with His own blood."],
      ["Day 11", "Called to Serve", "Matthew 20:28", "The Son of Man gives His life as a ransom for many."],
      ["Day 12", "Rescue Us from This Evil World", "Galatians 1:4", "Christ gives Himself to rescue us according to the Father's will."],
      ["Day 13", "Christ Lives in Me", "Galatians 2:20", "The redeemed life is lived by faith in the Son of God."],
      ["Day 14", "A New Covenant", "Hebrews 9:15", "Christ mediates a new covenant through His redeeming death."],
      ["Day 15", "Return to Me", "Isaiah 44:22", "God blots out sin and calls His people to return."],
      ["Day 16", "Patient for Our Sake", "2 Peter 3:9", "God's patience gives room for repentance."],
      ["Day 17", "Repent", "Acts 3:19", "Repentance turns us toward refreshing from the Lord."],
      ["Day 18", "The Gate", "John 10:9-10", "Jesus is the gate who gives salvation and abundant life."],
      ["Day 19", "Speak Out", "Psalm 107:2", "The redeemed of the Lord are called to say so."],
      ["Day 20", "Guaranteed Covenant", "Psalm 111:9", "God sends redemption and commands His covenant forever."],
      ["Day 21", "Can't You See?", "Romans 2:4", "God's kindness is meant to lead us to repentance."],
      ["Day 22", "How Much More", "Romans 5:10", "If reconciled by Christ's death, we are saved by His life."],
      ["Day 23", "Jesus Is Lord", "Romans 10:9-10", "Salvation is confessed with the mouth and believed in the heart."],
      ["Day 24", "My Defender", "Lamentations 3:57-58", "The Lord draws near, says not to fear, and redeems life."],
      ["Day 25", "God So Loved the World", "John 3:16", "God gives His Son so believers may have eternal life."]
    ]
  },
  {
    id: "consummation",
    label: "Theme 4",
    mark: "K",
    title: "Consummation",
    description: "Consummation is the final fulfillment of all God's plans and the establishment of His eternal kingdom.",
    days: [
      ["Day 1", "The Plan", "Ephesians 1:10", "God's plan is to bring all things together in Christ."],
      ["Day 2", "Once for All Time", "Hebrews 9:26", "Christ appears once for all to put away sin by His sacrifice."],
      ["Day 3", "The Good News", "Matthew 24:14", "The gospel of the kingdom will be proclaimed to all nations."],
      ["Day 4", "The End Will Come", "1 Corinthians 15:24", "Christ delivers the kingdom to the Father after every opposing power is defeated."],
      ["Day 5", "Crown of Life", "James 1:12", "Those who remain steadfast under trial receive the crown of life."],
      ["Day 6", "Receive the Gift", "Acts 2:38", "Repentance and baptism are joined with forgiveness and the gift of the Holy Spirit."],
      ["Day 7", "The Coming King", "Zechariah 9:9", "The King comes righteous, victorious, and humble."]
    ]
  },
  {
    id: "ten-commandments",
    label: "Theme 5",
    mark: "10",
    title: "The Ten Commandments",
    description: "A 30-day focus walking through the Ten Commandments with three days for each commandment: receiving God's word, examining the heart, and living it out.",
    days: [
      ["Day 1", "No Other Gods: The Command", "Exodus 20:1-3", "God begins by reminding His people that He rescued them, then calls them to worship Him alone."],
      ["Day 2", "No Other Gods: The Heart", "Deuteronomy 6:4-5", "Love for the Lord is meant to fill the whole heart, soul, and strength."],
      ["Day 3", "No Other Gods: Daily Allegiance", "Matthew 6:24", "Jesus teaches that divided masters divide the heart; devotion to God must come first."],
      ["Day 4", "No Idols: The Command", "Exodus 20:4-6", "God forbids His people from reducing His glory to anything made by human hands."],
      ["Day 5", "No Idols: True Worship", "John 4:23-24", "The Father seeks worshipers who worship in spirit and truth."],
      ["Day 6", "No Idols: Guarded Affections", "1 John 5:21", "God's children are called to keep themselves from idols, including the hidden idols of the heart."],
      ["Day 7", "God's Name: The Command", "Exodus 20:7", "The Lord's name is holy and must not be carried lightly, falsely, or carelessly."],
      ["Day 8", "God's Name: Reverence", "Psalm 29:2", "The Lord is worthy of glory, honor, and worship in the splendor of holiness."],
      ["Day 9", "God's Name: Words That Honor", "Colossians 3:17", "Everything said and done can become an act of honoring the name of the Lord Jesus."],
      ["Day 10", "Sabbath: The Command", "Exodus 20:8-11", "God commands a holy rhythm of work and rest rooted in His own creation pattern."],
      ["Day 11", "Sabbath: Gift of Rest", "Mark 2:27", "Jesus teaches that Sabbath was made as a gift for people, not as a burden to crush them."],
      ["Day 12", "Sabbath: Soul Rest", "Matthew 11:28-30", "Christ invites the weary to come to Him and receive rest for their souls."],
      ["Day 13", "Honor Parents: The Command", "Exodus 20:12", "God calls His people to honor father and mother as part of a life ordered under Him."],
      ["Day 14", "Honor Parents: Receiving Wisdom", "Proverbs 1:8-9", "Instruction and wisdom from parents can become a graceful covering for life."],
      ["Day 15", "Honor Parents: Care and Integrity", "1 Timothy 5:4", "Honoring family includes practical care, gratitude, and faithful responsibility."],
      ["Day 16", "Do Not Murder: The Command", "Exodus 20:13", "God protects human life because every person bears weight and value before Him."],
      ["Day 17", "Do Not Murder: The Heart", "Matthew 5:21-24", "Jesus exposes anger, contempt, and unreconciled relationships as matters of the heart."],
      ["Day 18", "Do Not Murder: Choose Peace", "Romans 12:18", "As far as it depends on us, God calls us to pursue peace with others."],
      ["Day 19", "Do Not Commit Adultery: The Command", "Exodus 20:14", "God protects covenant faithfulness, purity, and trust in marriage."],
      ["Day 20", "Do Not Commit Adultery: The Heart", "Matthew 5:27-30", "Jesus calls His followers to deal honestly and seriously with lust and compromise."],
      ["Day 21", "Do Not Commit Adultery: Faithful Love", "Hebrews 13:4", "Marriage is to be honored, and faithfulness matters before God."],
      ["Day 22", "Do Not Steal: The Command", "Exodus 20:15", "God forbids taking what belongs to another and calls His people to integrity."],
      ["Day 23", "Do Not Steal: Honest Work", "Ephesians 4:28", "The redeemed life turns from stealing toward honest work and generosity."],
      ["Day 24", "Do Not Steal: Open Hands", "Proverbs 11:25", "God forms His people into generous people who refresh others."],
      ["Day 25", "Do Not Bear False Witness: The Command", "Exodus 20:16", "God cares about truth, justice, and the way our words affect our neighbor."],
      ["Day 26", "Do Not Bear False Witness: Truthful Speech", "Ephesians 4:25", "Because believers belong to one another, they are called to put away falsehood and speak truth."],
      ["Day 27", "Do Not Bear False Witness: Words That Heal", "Proverbs 12:18", "Reckless words wound, but wise words can bring healing."],
      ["Day 28", "Do Not Covet: The Command", "Exodus 20:17", "God addresses desire itself, teaching His people not to grasp after what belongs to others."],
      ["Day 29", "Do Not Covet: Contentment", "Philippians 4:11-13", "Paul learned contentment through Christ's strength in every circumstance."],
      ["Day 30", "Do Not Covet: Treasure in God", "Luke 12:15", "Jesus warns that life does not consist in the abundance of possessions."]
    ]
  },
  {
    id: "women-of-the-bible",
    label: "Theme 6",
    mark: "W",
    title: "Women of the Bible",
    description: "A 14-day focus on women whose faith, courage, sorrow, wisdom, and obedience reveal God's work in ordinary and extraordinary lives.",
    days: [
      ["Day 1", "Eve: Made in God's Image", "Genesis 1:27-28", "Woman and man are created in God's image and blessed with purpose."],
      ["Day 2", "Sarah: Promise and Waiting", "Genesis 18:10-14", "God meets Sarah's laughter and doubt with the question: is anything too hard for the Lord?"],
      ["Day 3", "Hagar: Seen by God", "Genesis 16:7-13", "The Lord sees Hagar in distress and reveals Himself as the God who sees."],
      ["Day 4", "Miriam: Deliverance Song", "Exodus 15:20-21", "Miriam leads worship after God brings His people through the sea."],
      ["Day 5", "Rahab: Courageous Faith", "Joshua 2:8-14", "Rahab responds to God's reputation with risky faith and courageous action."],
      ["Day 6", "Deborah: Wise Leadership", "Judges 4:4-9", "Deborah serves with wisdom, courage, and trust in God's command."],
      ["Day 7", "Ruth: Loyal Love", "Ruth 1:16-17", "Ruth's steadfast love points toward covenant faithfulness and costly devotion."],
      ["Day 8", "Hannah: Honest Prayer", "1 Samuel 1:10-18", "Hannah pours out her soul before the Lord and receives peace before circumstances change."],
      ["Day 9", "Abigail: Peacemaking Wisdom", "1 Samuel 25:23-35", "Abigail acts with humility and wisdom to prevent bloodshed."],
      ["Day 10", "Esther: Courage for the Moment", "Esther 4:13-16", "Esther risks comfort and safety to act faithfully in her appointed moment."],
      ["Day 11", "Mary: Willing Surrender", "Luke 1:26-38", "Mary receives God's word with humility and offers herself to the Lord's will."],
      ["Day 12", "Elizabeth: Spirit-Filled Encouragement", "Luke 1:39-45", "Elizabeth blesses Mary's faith and recognizes God's work with joy."],
      ["Day 13", "Mary Magdalene: Witness to Resurrection", "John 20:11-18", "Mary Magdalene meets the risen Christ and is sent to tell the good news."],
      ["Day 14", "Priscilla: Faithful Teaching", "Acts 18:24-26", "Priscilla and Aquila help Apollos understand the way of God more accurately."]
    ]
  },
  {
    id: "prophets-of-the-bible",
    label: "Theme 7",
    mark: "P",
    title: "Prophets of the Bible",
    description: "A 14-day focus on prophetic voices that called God's people to repentance, justice, faithfulness, courage, and hope.",
    days: [
      ["Day 1", "Moses: Speak What God Commands", "Deuteronomy 18:15-19", "God promises a prophet like Moses and calls His people to listen."],
      ["Day 2", "Samuel: Here I Am", "1 Samuel 3:1-10", "Samuel learns to recognize and answer the voice of the Lord."],
      ["Day 3", "Nathan: Truth to Power", "2 Samuel 12:1-13", "Nathan confronts David with courage, exposing sin and opening the way to repentance."],
      ["Day 4", "Elijah: Choose the Lord", "1 Kings 18:20-24", "Elijah calls the people away from divided loyalty and back to the living God."],
      ["Day 5", "Elisha: Opened Eyes", "2 Kings 6:15-17", "Elisha's servant learns that God's unseen help is greater than visible danger."],
      ["Day 6", "Isaiah: Sent by God", "Isaiah 6:1-8", "Isaiah sees God's holiness, receives cleansing, and answers God's call."],
      ["Day 7", "Jeremiah: Called in Weakness", "Jeremiah 1:4-10", "God appoints Jeremiah and promises His presence despite fear."],
      ["Day 8", "Ezekiel: A New Heart", "Ezekiel 36:24-28", "God promises cleansing, a new heart, and His Spirit within His people."],
      ["Day 9", "Daniel: Faithful Under Pressure", "Daniel 6:10-23", "Daniel remains prayerful and faithful when obedience becomes costly."],
      ["Day 10", "Hosea: Steadfast Love", "Hosea 11:1-9", "God's wounded love reveals His mercy toward a wandering people."],
      ["Day 11", "Amos: Justice Like Waters", "Amos 5:21-24", "God rejects empty religion and calls for justice and righteousness."],
      ["Day 12", "Jonah: Mercy Beyond Borders", "Jonah 4:1-11", "God exposes Jonah's resentment and reveals His compassion for the lost."],
      ["Day 13", "Micah: What the Lord Requires", "Micah 6:6-8", "The Lord calls His people to justice, mercy, and humble walking with Him."],
      ["Day 14", "Malachi: Return to Me", "Malachi 3:6-12", "God calls His people to return and trust His covenant faithfulness."]
    ]
  },
  {
    id: "biblical-marriage",
    label: "Theme 8",
    mark: "M",
    title: "Marriage",
    description: "A 14-day focus on covenant love, humility, forgiveness, friendship, service, and faithfulness in marriage.",
    days: [
      ["Day 1", "One Flesh Covenant", "Genesis 2:18-25", "Marriage begins with God's design for companionship, unity, and unashamed intimacy."],
      ["Day 2", "Love Is Patient", "1 Corinthians 13:4-7", "Covenant love is shaped by patience, kindness, humility, and endurance."],
      ["Day 3", "Mutual Honor", "Ephesians 5:21", "A Christ-centered marriage begins with reverence for Christ and mutual humility."],
      ["Day 4", "Faithful Love", "Proverbs 3:3-4", "Steadfast love and faithfulness are to be treasured and practiced."],
      ["Day 5", "Gentle Words", "Proverbs 15:1", "Gentle answers can turn away anger and protect connection."],
      ["Day 6", "Quick to Listen", "James 1:19-20", "Listening, slow speech, and restrained anger create room for righteousness."],
      ["Day 7", "Forgive as Forgiven", "Colossians 3:12-14", "Compassion, humility, patience, and forgiveness hold relationships together in love."],
      ["Day 8", "Serve Like Christ", "Mark 10:43-45", "Jesus redefines greatness as service and self-giving love."],
      ["Day 9", "Guard the Covenant", "Malachi 2:14-16", "God cares about faithfulness and the covenant promises made between spouses."],
      ["Day 10", "Do Not Let the Sun Go Down", "Ephesians 4:26-32", "God calls couples away from bitterness and toward tenderhearted forgiveness."],
      ["Day 11", "Pray Together", "Matthew 18:19-20", "Shared prayer invites the presence and help of Christ into shared burdens."],
      ["Day 12", "Friendship and Delight", "Song of Solomon 2:10-13", "Marriage includes delight, pursuit, affection, and joy."],
      ["Day 13", "Build the Home", "Proverbs 24:3-4", "Wisdom, understanding, and knowledge strengthen a household."],
      ["Day 14", "A Cord of Three Strands", "Ecclesiastes 4:9-12", "Shared strength and God's presence help a marriage endure."]
    ]
  },
  {
    id: "hardship-and-suffering",
    label: "Theme 9",
    mark: "H",
    title: "Hardship and Suffering",
    description: "A 14-day focus for seasons of pain, pressure, grief, anxiety, endurance, and hope in God's faithful presence.",
    days: [
      ["Day 1", "God Is Near", "Psalm 34:17-18", "The Lord is near to the brokenhearted and hears the cry of the righteous."],
      ["Day 2", "Strength in Weakness", "2 Corinthians 12:7-10", "Christ's grace is sufficient, and His power is made perfect in weakness."],
      ["Day 3", "Cast Your Cares", "1 Peter 5:6-7", "God invites His people to cast anxiety on Him because He cares."],
      ["Day 4", "Peace Beyond Understanding", "Philippians 4:4-9", "Prayer, thanksgiving, and guarded thoughts open space for God's peace."],
      ["Day 5", "Walking Through Waters", "Isaiah 43:1-3", "God promises His presence through waters, rivers, and fire."],
      ["Day 6", "Lament Honestly", "Psalm 13:1-6", "Faith can bring sorrow, questions, trust, and praise honestly before God."],
      ["Day 7", "Consider It Joy", "James 1:2-5", "Trials can produce steadfastness, and God gives wisdom generously."],
      ["Day 8", "Hope Does Not Shame", "Romans 5:1-5", "Suffering can produce endurance, character, and hope through God's love."],
      ["Day 9", "The Lord Is My Shepherd", "Psalm 23:1-6", "God shepherds His people through want, fear, enemies, and the valley."],
      ["Day 10", "When I Am Afraid", "Psalm 56:3-4", "Fear becomes a doorway to trust in God's word."],
      ["Day 11", "Comfort Others", "2 Corinthians 1:3-7", "God comforts us so we can comfort others with His comfort."],
      ["Day 12", "Do Not Lose Heart", "2 Corinthians 4:16-18", "Present affliction is not the final word; unseen glory is eternal."],
      ["Day 13", "Jesus Wept", "John 11:32-36", "Jesus enters grief with compassion, presence, and tears."],
      ["Day 14", "Nothing Can Separate", "Romans 8:35-39", "No suffering can separate God's people from the love of God in Christ."]
    ]
  },
  {
    id: "divorce-and-healing",
    label: "Theme 10",
    mark: "D",
    title: "Divorce and Healing",
    description: "A 10-day focus for grief, wisdom, protection, repentance where needed, and hope in God's nearness after relational rupture.",
    days: [
      ["Day 1", "God Sees the Brokenhearted", "Psalm 34:18", "God draws near to the brokenhearted and does not despise crushed places."],
      ["Day 2", "Tell the Truth in Grief", "Psalm 62:8", "God invites His people to pour out their hearts before Him."],
      ["Day 3", "Wisdom and Counsel", "Proverbs 11:14", "Wise counsel helps protect people in confusing and painful decisions."],
      ["Day 4", "Peace Where Possible", "Romans 12:17-18", "God calls His people to pursue peace as far as it depends on them."],
      ["Day 5", "Protection from Harm", "Psalm 82:3-4", "God cares about justice, protection, and deliverance for the vulnerable."],
      ["Day 6", "Forgiveness and Boundaries", "Ephesians 4:31-32", "Forgiveness releases bitterness while wisdom still walks in truth and care."],
      ["Day 7", "A Future and a Hope", "Jeremiah 29:11-13", "God's people are invited to seek Him with hope even after loss."],
      ["Day 8", "New Mercies", "Lamentations 3:21-24", "The steadfast love of the Lord does not cease, and His mercies are new."],
      ["Day 9", "Identity in Christ", "Romans 8:1", "In Christ, condemnation does not define the believer's life."],
      ["Day 10", "God Restores Souls", "Psalm 23:3", "The Shepherd restores the soul and leads His people in paths of righteousness."]
    ]
  },
  {
    id: "health-and-wellness",
    label: "Theme 11",
    mark: "HW",
    title: "Health and Wellness in the Bible",
    description: "A 14-day focus on stewarding body, mind, rest, food, emotions, community, and worship as whole-person devotion to God.",
    days: [
      ["Day 1", "Body as a Temple", "1 Corinthians 6:19-20", "The body belongs to God and can be used to honor Him."],
      ["Day 2", "Renewed Mind", "Romans 12:1-2", "Transformation includes offering the body and renewing the mind."],
      ["Day 3", "Rest as Trust", "Psalm 127:1-2", "God gives sleep to His beloved and frees His people from anxious striving."],
      ["Day 4", "Food with Gratitude", "1 Timothy 4:4-5", "God's gifts are received with thanksgiving and consecrated by His word and prayer."],
      ["Day 5", "Strength for Today", "Isaiah 40:28-31", "The Lord renews strength for the weary who hope in Him."],
      ["Day 6", "A Cheerful Heart", "Proverbs 17:22", "The condition of the heart affects the life of the body."],
      ["Day 7", "Anxiety and Peace", "Matthew 6:25-34", "Jesus calls His people away from anxious living and toward trust in the Father."],
      ["Day 8", "Wise Discipline", "1 Corinthians 9:24-27", "Discipline can serve a greater purpose when aimed toward faithfulness."],
      ["Day 9", "Community Care", "Galatians 6:2", "Bearing burdens together is part of fulfilling the law of Christ."],
      ["Day 10", "Sabbath Rhythm", "Exodus 20:8-11", "God builds rest into the rhythm of human life."],
      ["Day 11", "Guard the Heart", "Proverbs 4:20-27", "Wisdom watches over the heart, eyes, speech, and steps."],
      ["Day 12", "Moderation and Self-Control", "Titus 2:11-12", "Grace trains God's people in self-control and godly living."],
      ["Day 13", "Healing and Prayer", "James 5:13-16", "Suffering, sickness, confession, and prayer are brought into the community of faith."],
      ["Day 14", "Whole-Person Love", "Mark 12:29-31", "Love for God involves heart, soul, mind, and strength."]
    ]
  },
  {
    id: "prayer-and-listening",
    label: "Theme 12",
    mark: "PR",
    title: "Prayer and Listening",
    description: "A 10-day focus on honest prayer, quiet listening, intercession, confession, persistence, and delighting in God's presence.",
    days: [
      ["Day 1", "Teach Us to Pray", "Luke 11:1-4", "Jesus teaches prayer rooted in God's holiness, provision, forgiveness, and dependence."],
      ["Day 2", "Pray in Secret", "Matthew 6:5-8", "The Father sees hidden prayer and knows what His children need."],
      ["Day 3", "Be Still", "Psalm 46:10", "Stillness makes room to know that God is God."],
      ["Day 4", "Pour Out Your Heart", "Psalm 62:5-8", "God is a refuge who can receive the whole heart."],
      ["Day 5", "Ask for Wisdom", "James 1:5-8", "God gives wisdom generously to those who ask in faith."],
      ["Day 6", "Intercede for Others", "1 Timothy 2:1-4", "Prayer includes requests, intercession, thanksgiving, and concern for all people."],
      ["Day 7", "Confess and Receive Mercy", "1 John 1:8-9", "God is faithful and just to forgive and cleanse those who confess."],
      ["Day 8", "Persistent Prayer", "Luke 18:1-8", "Jesus teaches His disciples to pray and not lose heart."],
      ["Day 9", "Pray Without Ceasing", "1 Thessalonians 5:16-18", "Joy, prayer, and thanksgiving form a daily rhythm in God's will."],
      ["Day 10", "Abide in Christ", "John 15:4-7", "Fruitful prayer grows from remaining in Christ and His words remaining in us."]
    ]
  },
  {
    id: "fruit-of-the-spirit",
    label: "Theme 13",
    mark: "FS",
    title: "Fruit of the Spirit",
    description: "A 9-day focus on the Spirit-formed character of love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.",
    days: [
      ["Day 1", "Love", "Galatians 5:22 and 1 John 4:7-12", "The Spirit grows love rooted in God's own love for us."],
      ["Day 2", "Joy", "Galatians 5:22 and Philippians 4:4", "Joy in the Lord can be practiced and received beyond changing circumstances."],
      ["Day 3", "Peace", "Galatians 5:22 and John 14:27", "Christ gives a peace unlike the world gives."],
      ["Day 4", "Patience", "Galatians 5:22 and Colossians 3:12-13", "Patience grows through compassion, humility, and bearing with others."],
      ["Day 5", "Kindness", "Galatians 5:22 and Ephesians 4:32", "Kindness reflects God's tender mercy toward us in Christ."],
      ["Day 6", "Goodness", "Galatians 5:22 and Romans 12:9-21", "Goodness resists evil and actively pursues what honors God."],
      ["Day 7", "Faithfulness", "Galatians 5:22 and Lamentations 3:22-24", "Human faithfulness grows as we behold the Lord's steadfast faithfulness."],
      ["Day 8", "Gentleness", "Galatians 5:23 and Matthew 11:28-30", "Jesus is gentle and lowly, and His way forms gentleness in His people."],
      ["Day 9", "Self-Control", "Galatians 5:23 and 2 Timothy 1:7", "The Spirit forms power, love, and self-control instead of fear."]
    ]
  },
  {
    id: "serving-and-mission",
    label: "Theme 14",
    mark: "S",
    title: "Serving and Mission",
    description: "A 10-day focus on active obedience: serving neighbors, carrying compassion into daily life, and joining God's mission with humility.",
    days: [
      ["Day 1", "Created for Good Works", "Ephesians 2:8-10", "Grace saves us and sends us into good works prepared by God."],
      ["Day 2", "Love Your Neighbor", "Luke 10:25-37", "Jesus defines neighbor love through costly mercy toward the person in need."],
      ["Day 3", "Serve the Least", "Matthew 25:35-40", "Jesus identifies care for the hungry, stranger, sick, and imprisoned as service to Him."],
      ["Day 4", "Use Your Gifts", "1 Peter 4:8-11", "Each gift is entrusted for serving others and glorifying God."],
      ["Day 5", "Do Justice and Mercy", "Micah 6:8", "God calls His people to justice, mercy, and humble walking."],
      ["Day 6", "Be Salt and Light", "Matthew 5:13-16", "Visible faith points others toward the Father through good works."],
      ["Day 7", "Go and Make Disciples", "Matthew 28:18-20", "Jesus sends His people with His authority and presence."],
      ["Day 8", "Speak with Grace", "Colossians 4:5-6", "Wise witness includes gracious words and thoughtful attention to outsiders."],
      ["Day 9", "Do Not Grow Weary", "Galatians 6:9-10", "God encourages steady goodness, especially toward the household of faith."],
      ["Day 10", "Serve Like Jesus", "John 13:12-17", "Jesus washes feet and calls His followers to humble, practical service."]
    ]
  },
  {
    id: "holy-spirit",
    label: "Theme 15",
    mark: "HS",
    title: "The Holy Spirit",
    description: "A 14-day focus on the person and work of the Holy Spirit: presence, conviction, new birth, guidance, power, fruit, gifts, comfort, and daily life with God.",
    days: [
      ["Day 1", "The Spirit of God Hovering", "Genesis 1:1-2", "The Spirit of God is present at creation, hovering over the waters as God's creative work begins."],
      ["Day 2", "A New Heart and Spirit", "Ezekiel 36:26-27", "God promises to give His people a new heart and put His Spirit within them."],
      ["Day 3", "Born of the Spirit", "John 3:5-8", "Jesus teaches that new birth comes by the Spirit, whose work is real even when unseen."],
      ["Day 4", "The Helper Promised", "John 14:15-17", "Jesus promises the Spirit of truth, the Helper who will be with and in His people."],
      ["Day 5", "The Spirit Teaches", "John 14:25-26", "The Holy Spirit teaches, reminds, and helps Christ's followers remember His words."],
      ["Day 6", "The Spirit Bears Witness", "Romans 8:14-16", "The Spirit leads God's children and bears witness that they belong to the Father."],
      ["Day 7", "Conviction and Truth", "John 16:7-11", "The Spirit convicts the world concerning sin, righteousness, and judgment."],
      ["Day 8", "Guided into Truth", "John 16:12-15", "The Spirit guides believers into truth and glorifies Christ."],
      ["Day 9", "Power to Witness", "Acts 1:8", "The Holy Spirit empowers Christ's people to bear witness near and far."],
      ["Day 10", "Filled with the Spirit", "Ephesians 5:18-21", "The Spirit-filled life overflows in worship, gratitude, and humble relationships."],
      ["Day 11", "Walk by the Spirit", "Galatians 5:16-18", "Walking by the Spirit means resisting the desires that pull us away from God."],
      ["Day 12", "Fruit of the Spirit", "Galatians 5:22-25", "The Spirit forms Christlike character and calls believers to keep in step with Him."],
      ["Day 13", "Gifts for the Body", "1 Corinthians 12:4-11", "The Spirit gives gifts for the common good, not personal pride."],
      ["Day 14", "Help in Weakness", "Romans 8:26-27", "The Spirit helps in weakness and intercedes when words fail."]
    ]
  }
];

const implementationText = "Take a moment to check in before moving on. Completion should mean you spent focused time with God, not just skimmed the reading.";
const adminCode = "walkwithgod";

const state = {
  focuses: [...defaultFocuses, ...loadAddedFocuses()],
  activeId: localStorage.getItem("walkWithGodActiveFocus") || "",
  activeDayIndex: Number(localStorage.getItem("walkWithGodActiveDay") || 0),
  completed: loadCompleted(),
  adminUnlocked: sessionStorage.getItem("walkWithGodAdminUnlocked") === "true",
  mode: localStorage.getItem("walkWithGodMode") || "solo",
  notes: JSON.parse(localStorage.getItem("walkWithGodNotes") || "{}"),
  checkins: JSON.parse(localStorage.getItem("walkWithGodCheckins") || "{}"),
  favorites: JSON.parse(localStorage.getItem("walkWithGodFavorites") || "[]"),
  community: JSON.parse(localStorage.getItem("walkWithGodCommunity") || "[]"),
  prayerRequests: [],
  deferredInstallPrompt: null,
  reminder: JSON.parse(localStorage.getItem("walkWithGodReminder") || '{"time":"07:00","message":"Spend uninterrupted time with God today.","channels":{"push":true,"email":false,"sms":false},"email":"","phone":""}'),
  user: null,
  supportMessages: [],
  selectedAdminUserId: "",
  authMode: "login"
};

const themeList = document.querySelector("#themeList");
const breatheInText = document.querySelector("#breatheInText");
const breatheOutText = document.querySelector("#breatheOutText");
const serverWarning = document.querySelector("#serverWarning");
const lockedBenefits = document.querySelector("#lockedBenefits");
const gatedSections = [
  document.querySelector("#today"),
  document.querySelector("#themes"),
  document.querySelector("#community"),
  document.querySelector("#install"),
  document.querySelector("#feedback"),
  document.querySelector("#admin")
];
const todayTitle = document.querySelector("#todayTitle");
const todayCopy = document.querySelector("#todayCopy");
const streakCount = document.querySelector("#streakCount");
const favoriteCount = document.querySelector("#favoriteCount");
const continueTodayButton = document.querySelector("#continueTodayButton");
const quickCompleteButton = document.querySelector("#quickCompleteButton");
const todayStatus = document.querySelector("#todayStatus");
const accountStatus = document.querySelector("#accountStatus");
const accountHeading = document.querySelector("#accountHeading");
const accountCopy = document.querySelector("#accountCopy");
const supportMessageList = document.querySelector("#supportMessageList");
const accountActions = document.querySelector("#accountActions");
const showSignupButton = document.querySelector("#showSignupButton");
const showLoginButton = document.querySelector("#showLoginButton");
const showReminderSettingsButton = document.querySelector("#showReminderSettingsButton");
const authForm = document.querySelector("#authForm");
const authName = document.querySelector("#authName");
const authEmail = document.querySelector("#authEmail");
const authPassword = document.querySelector("#authPassword");
const logoutButton = document.querySelector("#logoutButton");
const submitAuthButton = document.querySelector("#submitAuthButton");
const cancelAuthButton = document.querySelector("#cancelAuthButton");
const authMessage = document.querySelector("#authMessage");
const onboardingPanel = document.querySelector("#onboardingPanel");
const onboardingOptions = document.querySelector("#onboardingOptions");
const readerEmpty = document.querySelector("#readerEmpty");
const readerContent = document.querySelector("#readerContent");
const activeCategoryLabel = document.querySelector("#activeCategoryLabel");
const activeTitle = document.querySelector("#activeTitle");
const activePurpose = document.querySelector("#activePurpose");
const daysPill = document.querySelector("#daysPill");
const progressText = document.querySelector("#progressText");
const encouragementText = document.querySelector("#encouragementText");
const progressFill = document.querySelector("#progressFill");
const dayList = document.querySelector("#dayList");
const dayLabel = document.querySelector("#dayLabel");
const dayTitle = document.querySelector("#dayTitle");
const scriptureText = document.querySelector("#scriptureText");
const favoriteVerseButton = document.querySelector("#favoriteVerseButton");
const daySummary = document.querySelector("#daySummary");
const activeTimeText = document.querySelector("#activeTimeText");
const applicationText = document.querySelector("#applicationText");
const deedText = document.querySelector("#deedText");
const implementation = document.querySelector("#implementationText");
const noteInput = document.querySelector("#noteInput");
const stoodOutInput = document.querySelector("#stoodOutInput");
const invitationInput = document.querySelector("#invitationInput");
const blessInput = document.querySelector("#blessInput");
const saveNoteButton = document.querySelector("#saveNoteButton");
const noteStatus = document.querySelector("#noteStatus");
const favoriteVersesList = document.querySelector("#favoriteVersesList");
const completionContainer = document.querySelector("#completionContainer");
const completeButton = document.querySelector("#completeButton");
const nextButton = document.querySelector("#nextButton");
const reminderForm = document.querySelector("#reminderForm");
const reminderTime = document.querySelector("#reminderTime");
const reminderMessage = document.querySelector("#reminderMessage");
const reminderStatus = document.querySelector("#reminderStatus");
const reminderPush = document.querySelector("#reminderPush");
const reminderEmail = document.querySelector("#reminderEmail");
const reminderSms = document.querySelector("#reminderSms");
const reminderEmailAddress = document.querySelector("#reminderEmailAddress");
const reminderPhone = document.querySelector("#reminderPhone");
const reminderSettingsPanel = document.querySelector("#reminderSettingsPanel");
const enablePushButton = document.querySelector("#enablePushButton");
const testPushButton = document.querySelector("#testPushButton");
const soloModeButton = document.querySelector("#soloModeButton");
const communityModeButton = document.querySelector("#communityModeButton");
const communityForm = document.querySelector("#communityForm");
const communityInput = document.querySelector("#communityInput");
const communityStatus = document.querySelector("#communityStatus");
const communityFeed = document.querySelector("#communityFeed");
const prayerForm = document.querySelector("#prayerForm");
const prayerInput = document.querySelector("#prayerInput");
const anonymousPrayer = document.querySelector("#anonymousPrayer");
const prayerStatus = document.querySelector("#prayerStatus");
const prayerFeed = document.querySelector("#prayerFeed");
const installAppButton = document.querySelector("#installAppButton");
const installStatus = document.querySelector("#installStatus");
const feedbackForm = document.querySelector("#feedbackForm");
const feedbackType = document.querySelector("#feedbackType");
const feedbackText = document.querySelector("#feedbackText");
const feedbackStatus = document.querySelector("#feedbackStatus");
const adminUnlockForm = document.querySelector("#adminUnlockForm");
const adminStatus = document.querySelector("#adminStatus");
const adminCodeInput = document.querySelector("#adminCode");
const lockAdminButton = document.querySelector("#lockAdminButton");
const addFocusForm = document.querySelector("#addFocusForm");
const addFocusStatus = document.querySelector("#addFocusStatus");
const clearAddedFocuses = document.querySelector("#clearAddedFocuses");
const adminDashboard = document.querySelector("#adminDashboard");
const adminSummary = document.querySelector("#adminSummary");
const adminUserList = document.querySelector("#adminUserList");
const adminUserDetail = document.querySelector("#adminUserDetail");
const adminSupportForm = document.querySelector("#adminSupportForm");
const adminSupportMessage = document.querySelector("#adminSupportMessage");
const adminResetPasswordButton = document.querySelector("#adminResetPasswordButton");
const adminSupportStatus = document.querySelector("#adminSupportStatus");
const adminFeedbackList = document.querySelector("#adminFeedbackList");
const adminReportList = document.querySelector("#adminReportList");

function loadAddedFocuses() {
  return JSON.parse(localStorage.getItem("walkWithGodAddedFocuses") || "[]");
}

function saveAddedFocuses() {
  const added = state.focuses.filter((focus) => focus.custom);
  localStorage.setItem("walkWithGodAddedFocuses", JSON.stringify(added));
}

function loadCompleted() {
  const raw = JSON.parse(localStorage.getItem("walkWithGodCompletedDays") || "{}");
  return Object.fromEntries(Object.entries(raw).map(([key, value]) => [key, new Set(value)]));
}

function saveCompleted() {
  const serializable = Object.fromEntries(Object.entries(state.completed).map(([key, value]) => [key, [...value]]));
  localStorage.setItem("walkWithGodCompletedDays", JSON.stringify(serializable));
}

function dayKey() {
  return `${state.activeId || "general"}:${state.activeDayIndex}`;
}

function saveNotes() {
  localStorage.setItem("walkWithGodNotes", JSON.stringify(state.notes));
}

function saveCheckins() {
  localStorage.setItem("walkWithGodCheckins", JSON.stringify(state.checkins));
}

function saveFavorites() {
  localStorage.setItem("walkWithGodFavorites", JSON.stringify(state.favorites));
}

function saveCommunity() {
  localStorage.setItem("walkWithGodCommunity", JSON.stringify(state.community));
}

function saveReminder() {
  localStorage.setItem("walkWithGodReminder", JSON.stringify(state.reminder));
}

async function apiFetch(path, options = {}) {
  const response = await fetch(path, {
    credentials: "same-origin",
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "Request failed.");
  return payload;
}

function applyServerProgress(progress) {
  state.completed = {};
  for (const item of progress || []) {
    if (!state.completed[item.focusId]) state.completed[item.focusId] = new Set();
    state.completed[item.focusId].add(item.dayIndex);
  }
}

function applyServerNotes(notes) {
  state.notes = {};
  for (const item of notes || []) {
    state.notes[`${item.focusId}:${item.dayIndex}`] = item.text;
  }
}

async function loadServerState() {
  if (!state.user) return;
  const [progressResult, notesResult, reminderResult] = await Promise.all([
    apiFetch("/api/progress"),
    apiFetch("/api/notes"),
    apiFetch("/api/reminder")
  ]);
  applyServerProgress(progressResult.progress);
  applyServerNotes(notesResult.notes);
  if (reminderResult.reminder) {
    state.reminder = {
      time: reminderResult.reminder.time,
      message: reminderResult.reminder.message,
      channels: reminderResult.reminder.channels || { push: true, email: false, sms: false },
      email: reminderResult.reminder.email || "",
      phone: reminderResult.reminder.phone || ""
    };
    saveReminder();
  }
  await loadCommunity();
  await loadPrayerRequests();
  await loadSupportMessages();
  if (state.user?.role === "admin") await loadAdminDashboard();
}

async function loadCommunity() {
  const focus = activeFocus();
  try {
    const path = focus ? `/api/community?focusId=${encodeURIComponent(focus.id)}` : "/api/community";
    const result = await apiFetch(path);
    state.community = result.posts || [];
  } catch {
    state.community = JSON.parse(localStorage.getItem("walkWithGodCommunity") || "[]");
  }
}

async function loadPrayerRequests() {
  try {
    const result = await apiFetch("/api/prayer-requests");
    state.prayerRequests = result.requests || [];
  } catch {
    state.prayerRequests = [];
  }
}

async function loadSupportMessages() {
  if (!state.user) {
    state.supportMessages = [];
    return;
  }
  try {
    const result = await apiFetch("/api/support/messages");
    state.supportMessages = result.messages || [];
  } catch {
    state.supportMessages = [];
  }
}

function renderAccount() {
  if (state.user) {
    accountHeading.textContent = "Your account";
    accountCopy.textContent = "Manage reminders, sign out, and review any admin support messages.";
    accountStatus.textContent = `Signed in as ${state.user.name} (${state.user.role}).`;
    authForm.hidden = true;
    showSignupButton.hidden = true;
    showLoginButton.hidden = true;
    showReminderSettingsButton.hidden = false;
    logoutButton.hidden = false;
  } else {
    accountHeading.textContent = "Start with a free account";
    accountCopy.textContent = "Create an account or log in to open your daily focuses, prayer requests, community, notes, progress, and reminders.";
    accountStatus.textContent = "Choose one option below to begin.";
    showSignupButton.hidden = false;
    showLoginButton.hidden = false;
    showReminderSettingsButton.hidden = true;
    reminderSettingsPanel.hidden = true;
    logoutButton.hidden = true;
  }
  onboardingPanel.hidden = Boolean(state.activeId) || !state.user;
  supportMessageList.innerHTML = state.supportMessages.length
    ? state.supportMessages
        .slice(-3)
        .reverse()
        .map((message) => `<article class="support-message"><strong>Admin message</strong><p>${escapeHtml(message.text)}</p></article>`)
        .join("")
    : "";
}

function renderAccessGate() {
  const isSignedIn = Boolean(state.user);
  lockedBenefits.hidden = isSignedIn;
  for (const section of gatedSections) {
    if (section) section.hidden = !isSignedIn;
  }
}

function nextOpenDay(focus) {
  const completed = completedSet(focus.id);
  const openIndex = focus.days.findIndex((day, index) => !completed.has(index));
  return openIndex === -1 ? focus.days.length - 1 : openIndex;
}

function streakDays() {
  const dates = Object.values(state.completed)
    .flatMap((set) => [...set].map(() => "local"))
    .length;
  const saved = JSON.parse(localStorage.getItem("walkWithGodCompletionDates") || "[]");
  if (!saved.length && dates) return 1;
  const unique = [...new Set(saved)].sort().reverse();
  let streak = 0;
  const cursor = new Date();
  for (const date of unique) {
    const stamp = cursor.toISOString().slice(0, 10);
    if (date === stamp) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    } else if (streak === 0) {
      cursor.setDate(cursor.getDate() - 1);
      if (date === cursor.toISOString().slice(0, 10)) streak += 1;
    } else {
      break;
    }
  }
  return streak;
}

function rememberCompletionDate() {
  const today = new Date().toISOString().slice(0, 10);
  const saved = JSON.parse(localStorage.getItem("walkWithGodCompletionDates") || "[]");
  if (!saved.includes(today)) {
    saved.push(today);
    localStorage.setItem("walkWithGodCompletionDates", JSON.stringify(saved.slice(-120)));
  }
}

function renderToday() {
  const focus = activeFocus() || state.focuses[0];
  const dayIndex = nextOpenDay(focus);
  const day = focus.days[dayIndex];
  todayTitle.textContent = `${day[0]} of ${focus.title}`;
  todayCopy.textContent = `${day[1]} - ${day[2]}. ${completedSet(focus.id).has(dayIndex) ? "Welcome back. Continue where you left off or choose another focus." : "Your next step is ready."}`;
  streakCount.textContent = String(streakDays());
  favoriteCount.textContent = String(state.favorites.length);
  quickCompleteButton.disabled = !focus || completedSet(focus.id).has(dayIndex);
}

function currentFavoriteId() {
  return `${state.activeId}:${state.activeDayIndex}`;
}

function renderFavorites() {
  const favoriteId = currentFavoriteId();
  const isFavorite = state.favorites.some((item) => item.id === favoriteId);
  favoriteVerseButton.textContent = isFavorite ? "Favorite Saved" : "Save Favorite Verse";
  favoriteVerseButton.classList.toggle("is-saved", isFavorite);
  favoriteVersesList.innerHTML = state.favorites.length
    ? state.favorites
        .slice(-5)
        .reverse()
        .map((item) => `<article class="favorite-item"><strong>${escapeHtml(item.reference)}</strong><p>${escapeHtml(item.title)} from ${escapeHtml(item.focusTitle)}</p></article>`)
        .join("")
    : '<p class="empty-feed">Saved verses will appear here.</p>';
}

function renderCompletion(focus, isFocusComplete) {
  if (!isFocusComplete) return "";
  return `
    <div class="completion-card">
      <p class="block-label">Focus Complete</p>
      <h3>${escapeHtml(focus.title)} completed</h3>
      <p>Lord, help this focus become lived faith. Let Your word keep shaping my attention, choices, relationships, and obedience. Amen.</p>
      <a class="secondary-link" href="#themes">Choose Next Focus</a>
    </div>
  `;
}

function reactionCounts(reactions = []) {
  return reactions.reduce((counts, reaction) => {
    counts[reaction.type] = (counts[reaction.type] || 0) + 1;
    return counts;
  }, {});
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getDayExtras(focus, day) {
  const title = day[1].toLowerCase();
  const focusTitle = focus.title.toLowerCase();
  const dayNumber = Number((day[0].match(/\d+/) || [1])[0]);
  const applicationQuestions = [
    `What does ${day[1]} reveal about God's character, and how can I respond to Him today?`,
    `Where is this passage asking me to slow down, surrender, or listen more carefully?`,
    `What attitude, habit, or fear does this Scripture invite me to bring honestly before God?`,
    `How can I practice this truth in one ordinary moment before the day ends?`,
    `Who might be affected if I lived out ${day[1]} with humility and courage today?`,
    `What is one specific step of obedience this passage makes clear for me?`,
    `Where do I need God's help to believe, receive, or live this truth instead of only reading it?`,
    `What would change in my words, schedule, or relationships if I trusted this passage today?`,
    `How does this reading move me toward worship, repentance, gratitude, or service?`,
    `What should I carry from this time with God into the next conversation or responsibility?`
  ];
  let deed = "Offer one quiet act of obedience today that reflects this passage.";
  if (title.includes("light")) deed = "Bring light into one conversation today through honesty, encouragement, or prayer.";
  if (title.includes("sky") || title.includes("waters")) deed = "Step outside, look up, and thank God for His order before beginning your next task.";
  if (title.includes("vegetation") || title.includes("land")) deed = "Care for something physical today: a meal, a plant, a room, or a responsibility God has given you.";
  if (title.includes("human") || title.includes("image") || title.includes("man") || title.includes("woman")) deed = "Honor one person today as someone made in God's image.";
  if (title.includes("rests")) deed = "Practice a holy pause: stop one nonessential thing for a few minutes and receive rest from God.";
  if (title.includes("sin") || focusTitle.includes("fall")) deed = "Confess one specific sin or broken pattern to God and take one step away from it.";
  if (focusTitle.includes("redemption")) deed = "Encourage someone with a word of hope rooted in God's rescue and mercy.";
  if (focusTitle.includes("consummation")) deed = "Make one choice today that reflects hope in God's coming kingdom.";
  if (focusTitle.includes("commandments")) deed = "Choose one concrete act of obedience today that honors this commandment in your thoughts, words, or actions.";
  if (focusTitle.includes("women")) deed = "Name one faithful quality from this woman's story and practice it in one relationship today.";
  if (focusTitle.includes("prophets")) deed = "Respond to God's word with one courageous act of truth, repentance, justice, or hope today.";
  if (focusTitle.includes("marriage")) deed = "Offer one humble act of love, listening, service, or repair in your closest relationship today.";
  if (focusTitle.includes("hardship")) deed = "Bring one burden honestly to God, then take one small faithful step instead of carrying it alone.";
  if (focusTitle.includes("divorce")) deed = "Choose one healing action today: prayer, wise counsel, a boundary, forgiveness, rest, or asking for help.";
  if (focusTitle.includes("health")) deed = "Honor God with one whole-person choice today: rest, movement, nourishment, prayer, or reaching out for support.";
  if (focusTitle.includes("prayer")) deed = "Set a timer for five quiet minutes after praying, leaving room to listen before moving on.";
  if (focusTitle.includes("fruit")) deed = "Practice this fruit of the Spirit in one specific interaction before the day ends.";
  if (focusTitle.includes("serving")) deed = "Serve one person in a practical way today without needing attention or credit.";
  if (focusTitle.includes("holy spirit")) deed = "Pause before one decision today and ask the Holy Spirit to lead your words, desires, and next step.";
  return {
    active: "Set aside 10-15 uninterrupted minutes. Read the passage slowly, sit with the verse, pray honestly, and listen before writing or moving on.",
    application: applicationQuestions[(dayNumber - 1) % applicationQuestions.length],
    deed
  };
}

function activeFocus() {
  if (!state.activeId) return null;
  return state.focuses.find((focus) => focus.id === state.activeId) || null;
}

function completedSet(focusId) {
  if (!state.completed[focusId]) state.completed[focusId] = new Set();
  return state.completed[focusId];
}

function clampActiveDay(focus) {
  state.activeDayIndex = Math.max(0, Math.min(state.activeDayIndex, focus.days.length - 1));
}

function saveActivePosition() {
  localStorage.setItem("walkWithGodActiveFocus", state.activeId);
  localStorage.setItem("walkWithGodActiveDay", String(state.activeDayIndex));
}

function renderFocusList() {
  themeList.innerHTML = state.focuses
    .map((focus) => {
      const completeCount = completedSet(focus.id).size;
      return `
        <button class="theme-button" type="button" data-id="${focus.id}" aria-pressed="${focus.id === state.activeId}">
          <span class="theme-mark" aria-hidden="true">${focus.mark}</span>
          <span>
            <span class="theme-name">${focus.title}</span>
            <span class="theme-purpose">${completeCount}/${focus.days.length} days complete</span>
          </span>
        </button>
      `;
    })
    .join("");
}

function renderPrayerBreath() {
  const focus = activeFocus();
  const day = focus?.days[state.activeDayIndex];
  const options = [
    ["Lord, draw near.", "I will walk with You."],
    ["Your word is life.", "My pace belongs to You."],
    ["Spirit, lead me.", "I release my hurry."],
    ["Jesus, give me peace.", "I receive Your rest."],
    ["Father, guide me.", "I take the next faithful step."],
    ["Your mercy is new.", "I let go of yesterday."],
    ["You are with me.", "I do not walk alone."]
  ];
  const dayNumber = Number((day?.[0]?.match(/\d+/) || [1])[0]);
  const selected = options[(dayNumber - 1) % options.length];
  breatheInText.textContent = selected[0];
  breatheOutText.textContent = selected[1];
}

function renderDayList(focus) {
  const completed = completedSet(focus.id);
  dayList.innerHTML = focus.days
    .map((day, index) => `
      <button class="day-button ${completed.has(index) ? "is-complete" : ""}" type="button" data-index="${index}" aria-pressed="${index === state.activeDayIndex}">
        <span>${day[0]}</span>
        <strong>${day[1]}</strong>
      </button>
    `)
    .join("");
}

function renderReminder() {
  reminderTime.value = state.reminder.time || "07:00";
  reminderMessage.value = state.reminder.message || "Spend uninterrupted time with God today.";
  reminderPush.checked = state.reminder.channels?.push !== false;
  reminderEmail.checked = Boolean(state.reminder.channels?.email);
  reminderSms.checked = Boolean(state.reminder.channels?.sms);
  reminderEmailAddress.value = state.reminder.email || state.user?.email || "";
  reminderPhone.value = state.reminder.phone || "";
  reminderStatus.textContent = state.user ? `Reminder set for ${reminderTime.value}.` : "Sign in to save reminders to your account and enable push.";
}

function renderMode() {
  soloModeButton.classList.toggle("is-active", state.mode === "solo");
  communityModeButton.classList.toggle("is-active", state.mode === "community");
  communityForm.hidden = state.mode !== "community";
  communityFeed.hidden = state.mode !== "community";
}

function reminderFromForm() {
  return {
    time: reminderTime.value || "07:00",
    message: reminderMessage.value.trim() || "Spend uninterrupted time with God today.",
    channels: {
      push: reminderPush.checked,
      email: reminderEmail.checked,
      sms: reminderSms.checked
    },
    email: reminderEmailAddress.value.trim(),
    phone: reminderPhone.value.trim()
  };
}

function renderCommunity() {
  const focus = activeFocus();
  const entries = (focus ? state.community.filter((entry) => entry.focusId === focus.id) : state.community).slice(-8).reverse();
  communityFeed.innerHTML = entries.length
    ? entries
        .map((entry) => {
          const counts = reactionCounts(entry.reactions || []);
          return `
          <article class="community-entry">
            <strong>${escapeHtml(entry.userName || "Community member")} - ${escapeHtml(entry.dayLabel)} - ${escapeHtml(entry.dayTitle)}</strong>
            <p>${escapeHtml(entry.text)}</p>
            <div class="reaction-row">
              <button class="reaction-button" type="button" data-post-id="${escapeHtml(entry.id || "")}" data-reaction="praying">Praying ${counts.praying || 0}</button>
              <button class="reaction-button" type="button" data-post-id="${escapeHtml(entry.id || "")}" data-reaction="encouraged">Encouraged ${counts.encouraged || 0}</button>
              <button class="reaction-button" type="button" data-post-id="${escapeHtml(entry.id || "")}" data-reaction="amen">Amen ${counts.amen || 0}</button>
              <button class="report-button" type="button" data-post-id="${escapeHtml(entry.id || "")}">Report</button>
            </div>
          </article>
        `;
        })
        .join("")
    : '<p class="empty-feed">No community check-ins for this focus yet.</p>';
}

function renderPrayerRequests() {
  prayerFeed.innerHTML = state.prayerRequests.length
    ? state.prayerRequests
        .map((request) => `
          <article class="prayer-entry">
            <strong>${escapeHtml(request.userName || "Community member")}</strong>
            <p>${escapeHtml(request.text)}</p>
            <button class="reaction-button prayed-button" type="button" data-prayer-id="${escapeHtml(request.id)}">I prayed (${request.prayedBy?.length || 0})</button>
          </article>
        `)
        .join("")
    : '<p class="empty-feed">No shared prayer requests yet.</p>';
}

function renderAdmin() {
  const canAdmin = state.user?.role === "admin" && state.adminUnlocked;
  addFocusForm.hidden = !canAdmin;
  adminDashboard.hidden = !canAdmin;
  lockAdminButton.hidden = !state.adminUnlocked;
  if (state.adminUnlocked && state.user?.role !== "admin") {
    adminStatus.textContent = "Admin code accepted, but this account is not an admin.";
  } else if (canAdmin) {
    adminStatus.textContent = "Admin unlocked. You can manage focuses, accounts, feedback, and reports.";
  }
}

function renderAdminDashboard(data = null) {
  if (!data) return;
  adminSummary.innerHTML = `
    <div><strong>${data.summary.users}</strong><span>Users</span></div>
    <div><strong>${data.summary.communityPosts}</strong><span>Posts</span></div>
    <div><strong>${data.summary.openFeedback}</strong><span>Open feedback</span></div>
    <div><strong>${data.summary.openReports}</strong><span>Open reports</span></div>
  `;

  adminUserList.innerHTML = data.users.length
    ? data.users
        .map((user) => `
          <button class="admin-row" type="button" data-user-id="${escapeHtml(user.id)}">
            <strong>${escapeHtml(user.name)}</strong>
            <span>${escapeHtml(user.email)} - ${escapeHtml(user.role)} - ${user.metrics.completedDays} days complete</span>
          </button>
        `)
        .join("")
    : '<p class="empty-feed">No users yet.</p>';

  adminFeedbackList.innerHTML = data.feedback.length
    ? data.feedback
        .map((item) => `
          <article class="admin-item">
            <strong>${escapeHtml(item.type)} - ${escapeHtml(item.status)}</strong>
            <p>${escapeHtml(item.text)}</p>
            <small>${escapeHtml(item.user?.name || "Unknown user")}</small>
            <button class="quiet-button admin-feedback-action" type="button" data-id="${escapeHtml(item.id)}">Mark Reviewed</button>
          </article>
        `)
        .join("")
    : '<p class="empty-feed">No feedback yet.</p>';

  adminReportList.innerHTML = data.reports.length
    ? data.reports
        .map((report) => `
          <article class="admin-item">
            <strong>${escapeHtml(report.status)} report</strong>
            <p>${escapeHtml(report.reason)}</p>
            <small>${escapeHtml(report.post?.userName || "Unknown user")}: ${escapeHtml(report.post?.text || "Post missing")}</small>
            <div class="reflection-actions">
              <button class="quiet-button admin-report-action" type="button" data-id="${escapeHtml(report.id)}" data-status="reviewed">Mark Reviewed</button>
              ${report.post ? `<button class="quiet-button admin-hide-post" type="button" data-post-id="${escapeHtml(report.post.id)}">Hide Post</button>` : ""}
            </div>
          </article>
        `)
        .join("")
    : '<p class="empty-feed">No reports yet.</p>';
}

async function loadAdminDashboard() {
  if (state.user?.role !== "admin") return;
  const [summary, users, feedback, reports] = await Promise.all([
    apiFetch("/api/admin/summary"),
    apiFetch("/api/admin/users"),
    apiFetch("/api/admin/feedback"),
    apiFetch("/api/admin/reports")
  ]);
  renderAdminDashboard({
    summary,
    users: users.users || [],
    feedback: feedback.feedback || [],
    reports: reports.reports || []
  });
}

function render() {
  const focus = activeFocus();
  renderAccessGate();
  renderAccount();
  if (!state.user) {
    return;
  }
  readerEmpty.hidden = Boolean(focus);
  readerContent.hidden = !focus;
  renderToday();
  renderFocusList();
  renderPrayerBreath();
  renderReminder();
  renderMode();
  renderCommunity();
  renderPrayerRequests();
  renderAdmin();
  if (!focus) {
    progressFill.style.width = "0%";
    saveActivePosition();
    return;
  }
  clampActiveDay(focus);
  const completed = completedSet(focus.id);
  const day = focus.days[state.activeDayIndex];
  const progress = Math.round((completed.size / focus.days.length) * 100);
  const isDayComplete = completed.has(state.activeDayIndex);
  const isFocusComplete = completed.size === focus.days.length;
  const extras = getDayExtras(focus, day);

  activeCategoryLabel.textContent = focus.label;
  activeTitle.textContent = focus.title;
  activePurpose.textContent = focus.description;
  daysPill.textContent = `${focus.days.length} days`;
  progressText.textContent = `${completed.size} of ${focus.days.length} days complete`;
  encouragementText.textContent = isFocusComplete ? "Focus complete. Add another focus when you are ready." : `Complete this focus in ${focus.days.length} days.`;
  progressFill.style.width = `${progress}%`;
  dayLabel.textContent = day[0];
  dayTitle.textContent = day[1];
  scriptureText.textContent = day[2];
  daySummary.textContent = day[3];
  activeTimeText.textContent = extras.active;
  applicationText.textContent = extras.application;
  deedText.textContent = extras.deed;
  implementation.textContent = implementationText;
  noteInput.value = state.notes[dayKey()] || "";
  const checkin = state.checkins[dayKey()] || {};
  stoodOutInput.value = checkin.stoodOut || "";
  invitationInput.value = checkin.invitation || "";
  blessInput.value = checkin.bless || "";
  noteStatus.textContent = "";
  completeButton.textContent = isDayComplete ? "Day Complete" : "Mark Day Complete";
  completeButton.classList.toggle("is-complete", isDayComplete);
  nextButton.disabled = state.activeDayIndex === focus.days.length - 1;
  completionContainer.innerHTML = renderCompletion(focus, isFocusComplete);

  renderFocusList();
  renderDayList(focus);
  renderPrayerBreath();
  renderFavorites();
  renderToday();
  renderReminder();
  renderMode();
  renderCommunity();
  renderPrayerRequests();
  renderAdmin();
  saveActivePosition();
}

themeList.addEventListener("click", (event) => {
  const button = event.target.closest(".theme-button");
  if (!button) return;
  state.activeId = button.dataset.id;
  state.activeDayIndex = 0;
  loadCommunity().finally(render);
});

dayList.addEventListener("click", (event) => {
  const button = event.target.closest(".day-button");
  if (!button) return;
  state.activeDayIndex = Number(button.dataset.index);
  render();
});

completeButton.addEventListener("click", () => {
  const focus = activeFocus();
  completedSet(focus.id).add(state.activeDayIndex);
  rememberCompletionDate();
  saveCompleted();
  if (state.user) {
    apiFetch("/api/progress", { method: "POST", body: JSON.stringify({ focusId: focus.id, dayIndex: state.activeDayIndex }) }).catch((error) => {
      noteStatus.textContent = error.message;
    });
  }
  render();
});

continueTodayButton.addEventListener("click", () => {
  const focus = activeFocus() || state.focuses[0];
  state.activeId = focus.id;
  state.activeDayIndex = nextOpenDay(focus);
  document.querySelector("#themes").scrollIntoView({ behavior: "smooth" });
  loadCommunity().finally(render);
});

quickCompleteButton.addEventListener("click", () => {
  const focus = activeFocus() || state.focuses[0];
  state.activeId = focus.id;
  state.activeDayIndex = nextOpenDay(focus);
  completedSet(focus.id).add(state.activeDayIndex);
  rememberCompletionDate();
  saveCompleted();
  if (state.user) {
    apiFetch("/api/progress", { method: "POST", body: JSON.stringify({ focusId: focus.id, dayIndex: state.activeDayIndex }) }).catch((error) => {
      todayStatus.textContent = error.message;
    });
  }
  todayStatus.textContent = "Completed for today. Welcome back whenever you are ready for the next step.";
  render();
});

favoriteVerseButton.addEventListener("click", () => {
  const focus = activeFocus();
  if (!focus) return;
  const day = focus.days[state.activeDayIndex];
  const id = currentFavoriteId();
  if (state.favorites.some((item) => item.id === id)) {
    state.favorites = state.favorites.filter((item) => item.id !== id);
  } else {
    state.favorites.push({ id, focusTitle: focus.title, title: day[1], reference: day[2], savedAt: new Date().toISOString() });
  }
  saveFavorites();
  renderFavorites();
  renderToday();
});

saveNoteButton.addEventListener("click", () => {
  const focus = activeFocus();
  state.notes[dayKey()] = noteInput.value.trim();
  state.checkins[dayKey()] = {
    stoodOut: stoodOutInput.value.trim(),
    invitation: invitationInput.value.trim(),
    bless: blessInput.value.trim()
  };
  saveNotes();
  saveCheckins();
  if (!state.user) {
    noteStatus.textContent = "Note saved on this device. Sign in to sync it.";
    return;
  }
  apiFetch("/api/notes", {
    method: "POST",
    body: JSON.stringify({ focusId: focus.id, dayIndex: state.activeDayIndex, text: noteInput.value.trim() })
  })
    .then(() => {
      noteStatus.textContent = "Note saved to your account.";
    })
    .catch((error) => {
      noteStatus.textContent = error.message;
    });
});

nextButton.addEventListener("click", () => {
  const focus = activeFocus();
  state.activeDayIndex = Math.min(state.activeDayIndex + 1, focus.days.length - 1);
  render();
});

reminderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.reminder = reminderFromForm();
  saveReminder();
  if (!state.user) {
    reminderStatus.textContent = "Reminder saved on this device. Sign in to enable push delivery.";
    return;
  }
  apiFetch("/api/reminder", { method: "POST", body: JSON.stringify(state.reminder) })
    .then(() => {
      reminderStatus.textContent = `Reminder saved for ${state.reminder.time}.`;
      reminderSettingsPanel.hidden = true;
    })
    .catch((error) => {
      reminderStatus.textContent = error.message;
    });
});

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

enablePushButton.addEventListener("click", async () => {
  try {
    if (!state.user) throw new Error("Sign in before enabling push notifications.");
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) throw new Error("This browser does not support push notifications.");
    const permission = await Notification.requestPermission();
    if (permission !== "granted") throw new Error("Notification permission was not granted.");
    const keyResult = await apiFetch("/api/push/public-key");
    if (!keyResult.publicKey) throw new Error("Push keys are not ready. Run npm install and restart the server.");
    const registration = await navigator.serviceWorker.register("/service-worker.js");
    const existingSubscription = await registration.pushManager.getSubscription();
    if (existingSubscription) {
      await existingSubscription.unsubscribe();
    }
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(keyResult.publicKey)
    });
    const result = await apiFetch("/api/push/subscribe", { method: "POST", body: JSON.stringify({ subscription }) });
    reminderStatus.textContent = result.pushReady ? "Push notifications enabled." : "Subscription saved, but install web-push on the server to send notifications.";
  } catch (error) {
    reminderStatus.textContent = error.message;
  }
});

testPushButton.addEventListener("click", async () => {
  try {
    if (!state.user) throw new Error("Sign in before testing reminders.");
    state.reminder = reminderFromForm();
    saveReminder();
    await apiFetch("/api/reminder", { method: "POST", body: JSON.stringify(state.reminder) });
    const result = await apiFetch("/api/push/test", { method: "POST", body: JSON.stringify({}) });
    const channelResults = (result.results || []).map((item) => {
      if (!item.ok) return `${item.channel}: ${item.error || "failed"}`;
      const details = [item.status, item.sid].filter(Boolean).join(" ");
      return `${item.channel}: ${details || "sent"}`;
    });
    reminderStatus.textContent = channelResults.length
      ? channelResults.join(" | ")
      : "No reminder channel was selected for this test.";
  } catch (error) {
    reminderStatus.textContent = error.message;
  }
});

soloModeButton.addEventListener("click", () => {
  state.mode = "solo";
  localStorage.setItem("walkWithGodMode", state.mode);
  renderMode();
});

communityModeButton.addEventListener("click", () => {
  state.mode = "community";
  localStorage.setItem("walkWithGodMode", state.mode);
  renderMode();
});

communityForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = communityInput.value.trim();
  if (!text) {
    communityStatus.textContent = "Write a short check-in first.";
    return;
  }
  if (!state.user) {
    communityStatus.textContent = "Sign in to share with the community.";
    return;
  }
  const focus = activeFocus();
  const day = focus ? focus.days[state.activeDayIndex] : ["Community", "General check-in"];
  apiFetch("/api/community", {
    method: "POST",
    body: JSON.stringify({ focusId: focus?.id || "general", dayLabel: day[0], dayTitle: day[1], text })
  })
    .then(async () => {
      await loadCommunity();
      communityInput.value = "";
      communityStatus.textContent = "Check-in shared with the community.";
      renderCommunity();
    })
    .catch((error) => {
      communityStatus.textContent = error.message;
    });
});

prayerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = prayerInput.value.trim();
  if (!text) {
    prayerStatus.textContent = "Write a short prayer request first.";
    return;
  }
  if (!state.user) {
    prayerStatus.textContent = "Sign in to share a prayer request.";
    return;
  }
  apiFetch("/api/prayer-requests", {
    method: "POST",
    body: JSON.stringify({ text, isAnonymous: anonymousPrayer.checked })
  })
    .then(async () => {
      prayerInput.value = "";
      anonymousPrayer.checked = false;
      prayerStatus.textContent = "Prayer request shared.";
      await loadPrayerRequests();
      renderPrayerRequests();
    })
    .catch((error) => {
      prayerStatus.textContent = error.message;
    });
});

prayerFeed.addEventListener("click", (event) => {
  const button = event.target.closest(".prayed-button");
  if (!button) return;
  if (!state.user) {
    prayerStatus.textContent = "Sign in to mark that you prayed.";
    return;
  }
  apiFetch("/api/prayer-requests/prayed", {
    method: "POST",
    body: JSON.stringify({ id: button.dataset.prayerId })
  })
    .then(async () => {
      prayerStatus.textContent = "Marked as prayed.";
      await loadPrayerRequests();
      renderPrayerRequests();
    })
    .catch((error) => {
      prayerStatus.textContent = error.message;
    });
});

function openAuthForm(mode) {
  state.authMode = mode;
  authForm.hidden = false;
  reminderSettingsPanel.hidden = true;
  authName.closest("label").hidden = mode === "login";
  submitAuthButton.textContent = mode === "signup" ? "Create Account" : "Log In";
  authMessage.textContent = mode === "signup" ? "Create your account to save progress and join community." : "Log in to continue.";
}

showSignupButton.addEventListener("click", () => openAuthForm("signup"));
showLoginButton.addEventListener("click", () => openAuthForm("login"));
onboardingOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-suggest-focus]");
  if (!button) return;
  state.activeId = button.dataset.suggestFocus;
  state.activeDayIndex = 0;
  onboardingPanel.hidden = true;
  document.querySelector("#themes").scrollIntoView({ behavior: "smooth" });
  loadCommunity().finally(render);
});
showReminderSettingsButton.addEventListener("click", () => {
  reminderSettingsPanel.hidden = !reminderSettingsPanel.hidden;
  if (!reminderSettingsPanel.hidden) {
    authForm.hidden = true;
    reminderStatus.textContent = state.user ? `Reminder set for ${reminderTime.value}.` : "";
  }
});
cancelAuthButton.addEventListener("click", () => {
  authForm.hidden = true;
  authMessage.textContent = "";
});

communityFeed.addEventListener("click", (event) => {
  const reactionButton = event.target.closest(".reaction-button[data-reaction]");
  if (reactionButton) {
    if (!state.user) {
      communityStatus.textContent = "Sign in to react to a community post.";
      return;
    }
    apiFetch("/api/community/react", {
      method: "POST",
      body: JSON.stringify({ postId: reactionButton.dataset.postId, type: reactionButton.dataset.reaction })
    })
      .then(async () => {
        await loadCommunity();
        renderCommunity();
      })
      .catch((error) => {
        communityStatus.textContent = error.message;
      });
    return;
  }
  const button = event.target.closest(".report-button");
  if (!button) return;
  if (!state.user) {
    communityStatus.textContent = "Sign in to report a community post.";
    return;
  }
  if (!button.dataset.postId) {
    communityStatus.textContent = "This local post cannot be reported to the server.";
    return;
  }
  const reason = window.prompt("What should the admin team review about this post?");
  if (!reason) return;
  apiFetch("/api/community/report", {
    method: "POST",
    body: JSON.stringify({ postId: button.dataset.postId, reason })
  })
    .then(() => {
      communityStatus.textContent = "Report sent to the admin team.";
    })
    .catch((error) => {
      communityStatus.textContent = error.message;
    });
});

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.user) {
    feedbackStatus.textContent = "Sign in before sending feedback.";
    return;
  }
  apiFetch("/api/feedback", {
    method: "POST",
    body: JSON.stringify({ type: feedbackType.value, text: feedbackText.value.trim() })
  })
    .then(() => {
      feedbackText.value = "";
      feedbackStatus.textContent = "Feedback sent to the admin team.";
    })
    .catch((error) => {
      feedbackStatus.textContent = error.message;
    });
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const mode = state.authMode || "login";
  try {
    const result = await apiFetch(mode === "signup" ? "/api/auth/signup" : "/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        name: authName.value.trim(),
        email: authEmail.value.trim(),
        password: authPassword.value
      })
    });
    state.user = result.user;
    authPassword.value = "";
    authMessage.textContent = mode === "signup" ? "Account created." : "Signed in.";
    await loadServerState();
    render();
  } catch (error) {
    authMessage.textContent = error.message;
  }
});

logoutButton.addEventListener("click", async () => {
  try {
    await apiFetch("/api/auth/logout", { method: "POST", body: JSON.stringify({}) });
  } catch {
    // Continue signing out locally.
  }
  state.user = null;
  authForm.hidden = true;
  authMessage.textContent = "Signed out.";
  render();
});

adminUnlockForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (adminCodeInput.value.trim() !== adminCode) {
    state.adminUnlocked = false;
    sessionStorage.removeItem("walkWithGodAdminUnlocked");
    adminStatus.textContent = "Admin code did not match.";
    renderAdmin();
    return;
  }
  state.adminUnlocked = true;
  sessionStorage.setItem("walkWithGodAdminUnlocked", "true");
  adminCodeInput.value = "";
  renderAdmin();
  loadAdminDashboard().catch((error) => {
    adminStatus.textContent = error.message;
  });
});

lockAdminButton.addEventListener("click", () => {
  state.adminUnlocked = false;
  sessionStorage.removeItem("walkWithGodAdminUnlocked");
  adminStatus.textContent = "Admin locked.";
  renderAdmin();
});

addFocusForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.adminUnlocked) {
    addFocusStatus.textContent = "Unlock admin before adding focuses.";
    return;
  }
  const title = document.querySelector("#newFocusTitle").value.trim();
  const label = document.querySelector("#newFocusLabel").value.trim() || `Theme ${state.focuses.length + 1}`;
  const description = document.querySelector("#newFocusDescription").value.trim();
  const dayLines = document.querySelector("#newFocusDays").value.split("\n").map((line) => line.trim()).filter(Boolean);
  const days = dayLines.map((line, index) => {
    const parts = line.split("|").map((part) => part.trim());
    return [
      parts[0] || `Day ${index + 1}`,
      parts[1] || "Daily Reading",
      parts[2] || "Scripture reference",
      parts[3] || "Read the passage and notice what God reveals."
    ];
  });
  const focus = { id: `custom-${Date.now()}`, label, mark: title.charAt(0).toUpperCase(), title, description, days, custom: true };
  state.focuses.push(focus);
  state.activeId = focus.id;
  state.activeDayIndex = 0;
  saveAddedFocuses();
  addFocusForm.reset();
  addFocusStatus.textContent = `${title} added with ${days.length} days.`;
  render();
});

clearAddedFocuses.addEventListener("click", () => {
  if (!state.adminUnlocked) {
    addFocusStatus.textContent = "Unlock admin before clearing focuses.";
    return;
  }
  state.focuses = state.focuses.filter((focus) => !focus.custom);
  localStorage.removeItem("walkWithGodAddedFocuses");
  state.activeId = state.focuses[0].id;
  state.activeDayIndex = 0;
  addFocusStatus.textContent = "Added focuses cleared.";
  render();
});

adminUserList.addEventListener("click", (event) => {
  const button = event.target.closest(".admin-row");
  if (!button) return;
  state.selectedAdminUserId = button.dataset.userId;
  apiFetch(`/api/admin/user?id=${encodeURIComponent(state.selectedAdminUserId)}`)
    .then((result) => {
      const user = result.user;
      adminUserDetail.innerHTML = `
        <p><strong>${escapeHtml(user.name)}</strong></p>
        <p>${escapeHtml(user.email)} - ${escapeHtml(user.role)}</p>
        <p>${user.metrics.completedDays} completed days, ${user.metrics.communityPosts} community posts, ${user.metrics.privateNotes} private notes.</p>
        <p>Reminder: ${escapeHtml(user.metrics.reminder?.time || "not set")} - Push devices: ${user.metrics.pushSubscriptions}</p>
      `;
      adminSupportForm.hidden = false;
      adminSupportStatus.textContent = "";
    })
    .catch((error) => {
      adminUserDetail.textContent = error.message;
    });
});

adminSupportForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.selectedAdminUserId) return;
  apiFetch("/api/admin/user/message", {
    method: "POST",
    body: JSON.stringify({ userId: state.selectedAdminUserId, text: adminSupportMessage.value.trim() })
  })
    .then(() => {
      adminSupportMessage.value = "";
      adminSupportStatus.textContent = "Support message sent.";
      return loadAdminDashboard();
    })
    .catch((error) => {
      adminSupportStatus.textContent = error.message;
    });
});

adminResetPasswordButton.addEventListener("click", () => {
  if (!state.selectedAdminUserId) return;
  apiFetch("/api/admin/user/reset-password", {
    method: "POST",
    body: JSON.stringify({ userId: state.selectedAdminUserId })
  })
    .then((result) => {
      adminSupportStatus.textContent = `Temporary password: ${result.temporaryPassword}`;
    })
    .catch((error) => {
      adminSupportStatus.textContent = error.message;
    });
});

adminFeedbackList.addEventListener("click", (event) => {
  const button = event.target.closest(".admin-feedback-action");
  if (!button) return;
  apiFetch("/api/admin/feedback/status", {
    method: "POST",
    body: JSON.stringify({ id: button.dataset.id, status: "reviewed" })
  })
    .then(loadAdminDashboard)
    .catch((error) => {
      adminStatus.textContent = error.message;
    });
});

adminReportList.addEventListener("click", (event) => {
  const reportButton = event.target.closest(".admin-report-action");
  const hideButton = event.target.closest(".admin-hide-post");
  if (reportButton) {
    apiFetch("/api/admin/reports/status", {
      method: "POST",
      body: JSON.stringify({ id: reportButton.dataset.id, status: reportButton.dataset.status })
    })
      .then(loadAdminDashboard)
      .catch((error) => {
        adminStatus.textContent = error.message;
      });
  }
  if (hideButton) {
    apiFetch("/api/admin/community/hide", {
      method: "POST",
      body: JSON.stringify({ postId: hideButton.dataset.postId })
    })
      .then(loadAdminDashboard)
      .catch((error) => {
        adminStatus.textContent = error.message;
      });
  }
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  state.deferredInstallPrompt = event;
  installStatus.textContent = "You can install Walk With God on this device.";
});

function installInstructions() {
  const userAgent = navigator.userAgent.toLowerCase();
  const isIos = /iphone|ipad|ipod/.test(userAgent);
  const isAndroid = /android/.test(userAgent);
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
  if (isStandalone) return "Walk With God is already installed on this device.";
  if (isIos) return "On iPhone or iPad: tap Share, then choose Add to Home Screen.";
  if (isAndroid) return "On Android: open the browser menu, then choose Install app or Add to Home screen.";
  return "In Chrome or Edge: use the install icon in the address bar, or open the browser menu and choose Install app.";
}

installAppButton.addEventListener("click", async () => {
  if (!state.deferredInstallPrompt) {
    installStatus.textContent = installInstructions();
    return;
  }
  state.deferredInstallPrompt.prompt();
  const choice = await state.deferredInstallPrompt.userChoice;
  installStatus.textContent = choice.outcome === "accepted" ? "App install started." : "Install dismissed. You can come back anytime.";
  state.deferredInstallPrompt = null;
});

async function registerAppShell() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return;
  try {
    await navigator.serviceWorker.register("/service-worker.js");
    if (!state.deferredInstallPrompt) installStatus.textContent = installInstructions();
  } catch {
    installStatus.textContent = "App install will be available after the site finishes loading securely.";
  }
}

async function init() {
  if (window.location.protocol === "file:") {
    serverWarning.hidden = false;
  }
  try {
    const result = await apiFetch("/api/me");
    state.user = result.user;
    if (state.user) {
      await loadServerState();
    } else {
      await loadCommunity();
      await loadPrayerRequests();
    }
  } catch {
    state.user = null;
  }
  await registerAppShell();
  render();
}

init();
