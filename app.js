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
  },
  {
    id: "angels-in-the-bible",
    label: "Theme 16",
    mark: "A",
    title: "Angels in the Bible",
    description: "A 14-day focus on angels as God's servants and messengers, helping users worship God rather than the messengers He sends.",
    days: [
      ["Day 1", "Messengers of God", "Psalm 103:20-21", "Angels are mighty servants who do God's word and minister according to His will."],
      ["Day 2", "Guarded on the Way", "Genesis 24:7", "Abraham trusts that God can send His angel ahead to guide the journey."],
      ["Day 3", "Jacob's Ladder", "Genesis 28:10-17", "Jacob sees angels ascending and descending, and learns that God is present in that place."],
      ["Day 4", "The Angel of the Lord Appears", "Exodus 3:1-6", "God meets Moses in the burning bush and calls him into holy attention."],
      ["Day 5", "Protected in the Fire", "Daniel 3:24-28", "God sends help in the furnace and shows that His servants are not abandoned."],
      ["Day 6", "Strength for Daniel", "Daniel 10:10-19", "A heavenly messenger strengthens Daniel and tells him not to fear."],
      ["Day 7", "Gabriel and God's Timing", "Luke 1:11-20", "Gabriel announces God's promise to Zechariah after years of waiting."],
      ["Day 8", "Gabriel and Mary's Yes", "Luke 1:26-38", "Gabriel brings news of Christ's birth, and Mary responds with surrendered faith."],
      ["Day 9", "Angels Announce Good News", "Luke 2:8-14", "The birth of Jesus is announced with worship, joy, and glory to God."],
      ["Day 10", "Ministering to Jesus", "Matthew 4:1-11", "After Jesus resists temptation, angels come and minister to Him."],
      ["Day 11", "Strength in Gethsemane", "Luke 22:39-43", "In deep anguish, Jesus receives strengthening as He surrenders to the Father's will."],
      ["Day 12", "The Empty Tomb", "Matthew 28:1-7", "An angel announces that Jesus is risen and sends the women to tell the disciples."],
      ["Day 13", "Delivered from Prison", "Acts 12:6-11", "An angel leads Peter out of prison while the church is praying."],
      ["Day 14", "Worship God Alone", "Revelation 22:8-9", "Even glorious heavenly messengers refuse worship and point all worship back to God."]
    ]
  },
  {
    id: "manifestation-in-the-bible",
    label: "Theme 17",
    mark: "MF",
    title: "Manifestation in the Bible",
    description: "A 14-day focus on biblical manifestation: God revealing His presence, glory, promises, character, and kingdom in ways that lead to faith, surrender, and obedience.",
    days: [
      ["Day 1", "God Reveals His Glory", "Exodus 33:18-23", "Moses asks to see God's glory, and God reveals His goodness while protecting him."],
      ["Day 2", "The Glory Fills the Tabernacle", "Exodus 40:34-38", "God's presence fills the tabernacle and visibly leads His people."],
      ["Day 3", "The Lord Provides", "Genesis 22:9-14", "God reveals Himself as provider in the place of surrender and obedience."],
      ["Day 4", "Fire from Heaven", "1 Kings 18:36-39", "God manifests His power so the people will know that He is the Lord."],
      ["Day 5", "A Still Small Voice", "1 Kings 19:11-13", "God reveals Himself to Elijah not only in power, but in a quiet voice."],
      ["Day 6", "The Word Became Flesh", "John 1:14-18", "God's ultimate self-revelation is Jesus Christ, full of grace and truth."],
      ["Day 7", "Manifested to Destroy Darkness", "1 John 3:8", "The Son of God is revealed to destroy the works of the devil."],
      ["Day 8", "God's Love Manifested", "1 John 4:9-12", "God's love is made visible through the sending of His Son and through love among His people."],
      ["Day 9", "Jesus Reveals the Father", "John 14:8-11", "To see Jesus is to see the Father; God's character is revealed in Christ."],
      ["Day 10", "The Spirit Given", "Acts 2:1-4", "The Holy Spirit comes upon the believers and empowers them for witness."],
      ["Day 11", "Christ in You", "Colossians 1:26-27", "The mystery now revealed is Christ in His people, the hope of glory."],
      ["Day 12", "The Fruit Made Visible", "Galatians 5:22-25", "The Spirit's work becomes visible through transformed character."],
      ["Day 13", "Your Light Before Others", "Matthew 5:14-16", "God's people live visibly so others may glorify the Father."],
      ["Day 14", "The Revealing of Jesus Christ", "Revelation 1:1-8", "Scripture points toward the final revealing of Jesus, the Alpha and Omega."]
    ]
  },
  {
    id: "self-love-and-confidence",
    label: "Theme 18",
    mark: "SL",
    title: "Self-Love and Confidence in the Bible",
    description: "A 14-day focus on receiving your God-given worth, rejecting shame, caring for yourself with wisdom, and walking in humble confidence.",
    days: [
      ["Day 1", "Made in God's Image", "Genesis 1:26-27", "Your worth begins with God's design, not performance, appearance, approval, or achievement."],
      ["Day 2", "Wonderfully Made", "Psalm 139:13-16", "God formed you with intention and sees your life with care from the beginning."],
      ["Day 3", "Called Very Good", "Genesis 1:31", "God's creation is not something to despise; His good design invites gratitude and stewardship."],
      ["Day 4", "Loved as Neighbor and Self", "Mark 12:30-31", "Jesus connects love for God, neighbor, and self in a life ordered by holy love."],
      ["Day 5", "No Condemnation", "Romans 8:1", "In Christ, condemnation is not your identity or your assignment."],
      ["Day 6", "Chosen and Beloved", "Colossians 3:12-14", "God calls His people chosen, holy, and beloved before calling them into compassion and love."],
      ["Day 7", "God's Workmanship", "Ephesians 2:10", "You are God's workmanship, created in Christ for good works prepared by Him."],
      ["Day 8", "Confidence Before God", "Hebrews 4:14-16", "Because of Jesus, you can approach God with confidence to receive mercy and grace."],
      ["Day 9", "Strength Without Fear", "2 Timothy 1:7", "God gives a spirit of power, love, and self-control instead of fear."],
      ["Day 10", "Courage from God's Presence", "Joshua 1:9", "Biblical confidence grows from knowing God is with you wherever you go."],
      ["Day 11", "Renewed Mind", "Romans 12:1-2", "God renews the mind so you can resist false labels and discern His good will."],
      ["Day 12", "Speak Life", "Proverbs 18:21", "Words carry weight, including the words you speak over yourself."],
      ["Day 13", "Clothed with Strength", "Proverbs 31:25", "Strength and dignity make room for hope instead of fear of the future."],
      ["Day 14", "Christ Lives in Me", "Galatians 2:20", "Your life is held in Christ's love, and confidence grows from belonging to Him."]
    ]
  },
  {
    id: "god-loves-you",
    label: "Theme 19",
    mark: "GL",
    title: "How God Loves You",
    description: "A 14-day focus on the depth, nearness, patience, mercy, delight, and permanence of God's love for you.",
    days: [
      ["Day 1", "God So Loved", "John 3:16-17", "God's love is revealed in giving His Son to save rather than condemn."],
      ["Day 2", "Loved First", "1 John 4:9-10", "Love begins with God, who loved first and sent His Son as the atoning sacrifice."],
      ["Day 3", "While We Were Sinners", "Romans 5:6-8", "God's love meets people before they can make themselves worthy."],
      ["Day 4", "Everlasting Love", "Jeremiah 31:3", "God's love is everlasting and draws His people with unfailing kindness."],
      ["Day 5", "Held by Steadfast Love", "Psalm 136:1", "The Lord is good, and His steadfast love endures forever."],
      ["Day 6", "Compassionate Father", "Psalm 103:8-14", "God is compassionate, slow to anger, and mindful of human weakness."],
      ["Day 7", "Loved as Children", "1 John 3:1", "The Father gives a love so generous that His people are called children of God."],
      ["Day 8", "The Shepherd's Care", "Psalm 23:1-6", "God's love shepherds, restores, guides, comforts, provides, and follows His people."],
      ["Day 9", "Jesus Loves His Own", "John 13:1", "Jesus loves His own to the end with faithful, serving love."],
      ["Day 10", "Abide in My Love", "John 15:9-11", "Jesus invites His followers to remain in His love and receive His joy."],
      ["Day 11", "Loved Beyond Measuring", "Ephesians 3:16-19", "God's love in Christ is wide, long, high, deep, and beyond full comprehension."],
      ["Day 12", "Nothing Can Separate", "Romans 8:35-39", "No suffering, power, fear, or created thing can separate you from God's love in Christ."],
      ["Day 13", "Quieted by Love", "Zephaniah 3:17", "God is present, mighty to save, rejoices over His people, and quiets them by His love."],
      ["Day 14", "Mercy Made New", "Lamentations 3:22-24", "God's steadfast love does not cease, and His mercies are new every morning."]
    ]
  },
  {
    id: "purpose",
    label: "Theme 20",
    mark: "PU",
    title: "Purpose",
    description: "A 14-day focus on discovering and living God-given purpose through identity, calling, gifts, obedience, service, work, and faithful daily surrender.",
    days: [
      ["Day 1", "Created With Intention", "Genesis 1:26-28", "God creates humanity in His image and gives people meaningful responsibility in His good world."],
      ["Day 2", "Known Before You Began", "Jeremiah 1:4-8", "God knows Jeremiah before birth and calls him beyond his fear and inexperience."],
      ["Day 3", "God's Workmanship", "Ephesians 2:10", "In Christ, believers are God's workmanship, created for good works prepared by Him."],
      ["Day 4", "Called According to His Purpose", "Romans 8:28-30", "God works through every season to conform His people to the image of Christ."],
      ["Day 5", "Seek First the Kingdom", "Matthew 6:31-34", "Jesus redirects anxious striving toward God's kingdom and daily trust."],
      ["Day 6", "Different Gifts, One Body", "Romans 12:4-8", "God gives different gifts so His people can serve faithfully together."],
      ["Day 7", "A Light That Points to God", "Matthew 5:14-16", "Jesus calls His people to live visibly so others may glorify the Father."],
      ["Day 8", "Faithful in Small Things", "Luke 16:10", "Purpose grows through faithfulness in ordinary, hidden, and seemingly small responsibilities."],
      ["Day 9", "Work With Your Whole Heart", "Colossians 3:23-24", "Daily work becomes worship when done for the Lord rather than only for human approval."],
      ["Day 10", "Use What Is in Your Hand", "Exodus 4:1-5", "God asks Moses to offer what he already has, then uses it for His purposes."],
      ["Day 11", "For Such a Time as This", "Esther 4:13-16", "Esther faces a costly moment where courage and calling meet."],
      ["Day 12", "Sent to Serve", "Mark 10:43-45", "Jesus defines greatness through service and gives His own life as the pattern."],
      ["Day 13", "Run Your Race", "Hebrews 12:1-2", "Believers are called to lay aside what hinders and run with endurance while looking to Jesus."],
      ["Day 14", "Finish the Assignment", "2 Timothy 4:6-8", "Paul reflects on a faithful life poured out for God and looks toward the crown of righteousness."]
    ]
  }
];

const implementationText = "Take a moment to check in before moving on. Completion should mean you spent focused time with God, not just skimmed the reading.";
const adminCode = "walkwithgod";
let reminderChannelAvailability = {
  push: true,
  email: false,
  sms: true
};
const premiumBreathworkRoutines = [
  ["Day 1", "Simply Breathe", "3 minutes", "4-in, 4-out", "Awareness", "Psalm 46:10", "Today, simply notice the breath. Inhale for 4, exhale for 4. Nothing to fix, nothing to achieve, just breathe with God.", "Soft morning light over a walking path", "Slow, reassuring, spacious voice with pauses after each count.", "Lord, teach me to begin with You, one quiet breath at a time.", "/api/premium-media/breathwork-day-1"],
  ["Day 2", "Let Go", "3 minutes", "4-in, 6-out", "Releasing tension", "1 Peter 5:7", "Inhale gently for 4. Exhale slowly for 6. With every longer exhale, release what you cannot control into God's care.", "Flowing river or slow clouds", "Warm and calm, emphasizing release on each exhale.", "Father, I give You what I was not meant to carry alone."],
  ["Day 3", "Ground Yourself", "4 minutes", "Belly breathing", "Presence", "Colossians 2:7", "Place a hand on your belly. Let the breath rise and fall slowly. Notice that you are here, held by God, rooted in His love.", "Forest floor, moss, steady trees", "Grounded, gentle, with quiet reminders to relax the shoulders.", "Root me in Your truth and steady my heart today."],
  ["Day 4", "Quiet the Mind", "4 minutes", "Box breathing", "Calm thoughts", "Isaiah 26:3", "Inhale 4, hold 4, exhale 4, hold 4. Imagine tracing a square while your thoughts settle before the Lord.", "Gentle ocean waves", "Clear counting with peaceful space between rounds.", "Keep my mind stayed on You and lead me into peace."],
  ["Day 5", "Gratitude Breath", "4 minutes", "Inhale gratitude, exhale worry", "Thankfulness", "1 Thessalonians 5:18", "Breathe in and name one gift. Breathe out and release one worry. Let gratitude become prayer.", "Sunlit garden or wildflowers", "Soft, grateful, slightly brighter tone.", "Thank You, Lord, for meeting me in this moment."],
  ["Day 6", "Release Stress", "3 minutes", "Deep inhale, sigh exhale", "Stress relief", "Matthew 11:28", "Take a deep breath in. Exhale with a gentle sigh. Let your body receive Christ's invitation to come and rest.", "Rain on leaves or quiet trail", "Comforting and unhurried, allowing audible exhales.", "Jesus, I come to You tired and receive Your rest."],
  ["Day 7", "Weekly Reset", "10 minutes", "Mixed gentle breathing", "Review and renewal", "Lamentations 3:22-23", "Review the week through breath: awareness, release, grounding, calm, gratitude, and rest. Let mercy meet you again.", "Sunrise over a peaceful landscape", "Reflective, slow, with longer silent stretches.", "Renew my rhythm, Lord, and help me begin again with grace."],
  ["Day 8", "Morning Energy", "4 minutes", "Deeper steady breathing", "New day", "Psalm 118:24", "Breathe a little deeper than usual, without strain. Welcome the new day as a gift from God.", "Sunrise and open sky", "Hopeful, bright, energizing without rushing.", "Lord, help me receive this day and walk in it faithfully."],
  ["Day 9", "Clear Thinking", "4 minutes", "Box breathing", "Mental clarity", "James 1:5", "Use box breathing to clear mental clutter. Ask God for wisdom with each steady round.", "Clear mountain air", "Steady and focused, with crisp counting.", "God of wisdom, order my thoughts and guide my choices."],
  ["Day 10", "Confidence", "5 minutes", "5-in, 5-out", "Courage", "Joshua 1:9", "Inhale for 5 and exhale for 5. Let each breath remind you that courage comes from God's presence.", "Strong trees in morning light", "Encouraging and grounded.", "Lord, make me strong and courageous because You are with me."],
  ["Day 11", "Focus Flow", "5 minutes", "One breath, one task", "Attention", "Colossians 3:23", "Breathe slowly and choose one faithful task. Let your attention return to God and the work before you.", "Mountain trail or quiet desk with natural light", "Minimal, focused, with simple repetition.", "Help me work with a whole heart before You."],
  ["Day 12", "Productivity Reset", "4 minutes", "4-in, 4-hold, 6-out", "Reset", "Psalm 90:12", "Inhale 4, hold 4, exhale 6. Let hurry leave your body and ask God to order your time.", "Clock, sunlight, calm workspace", "Practical, calm, lightly directive.", "Teach me to number my days and use this time wisely."],
  ["Day 13", "Mental Clarity", "5 minutes", "Slow nasal breathing", "Organized thoughts", "Romans 12:2", "Breathe slowly and notice one thought at a time. Invite God to renew your mind with truth.", "Still lake reflecting trees", "Gentle and thoughtful.", "Renew my mind and help me recognize what is true."],
  ["Day 14", "Weekend Recharge", "10 minutes", "Restful breathing", "Recovery", "Exodus 33:14", "Let the breath slow naturally. Receive the gift of God's presence as the deepest form of rest.", "Quiet meadow, soft wind", "Restful, spacious, with longer pauses.", "Your presence is my rest, Lord."],
  ["Day 15", "Anxiety Relief", "5 minutes", "4-in, 6-out", "Safety", "Philippians 4:6-7", "Inhale for 4. Exhale for 6. With each exhale, let God's peace guard your heart and mind.", "Slow waves or rain-soft window", "Very calm and reassuring.", "God of peace, guard my heart and mind in Christ Jesus."],
  ["Day 16", "Patience", "4 minutes", "Slow even breathing", "Waiting well", "Galatians 5:22", "Breathe evenly and practice not rushing the next breath. Let patience become a small act of surrender.", "Slow-growing plant or quiet path", "Gentle, slow, patient pacing.", "Grow patience in me by Your Spirit."],
  ["Day 17", "Self-Compassion", "5 minutes", "Hand-on-heart breathing", "Kindness", "Psalm 103:13-14", "Place a hand over your heart. Breathe in God's compassion. Breathe out harsh self-judgment.", "Soft light through trees", "Tender, careful, compassionate.", "Father, help me receive Your compassion and speak with kindness."],
  ["Day 18", "Release Anger", "5 minutes", "Cooling exhales", "Gentleness", "James 1:19-20", "Inhale calm light. Exhale anger without feeding it. Ask God to slow your words and soften your response.", "Storm clearing over hills", "Low, steady, de-escalating.", "Lord, make me quick to listen, slow to speak, and slow to anger."],
  ["Day 19", "Forgiveness", "6 minutes", "Long exhale release", "Freedom", "Ephesians 4:32", "Breathe in mercy received. Breathe out the debt you keep rehearsing. Forgiveness may be a process; begin with surrender.", "Open field or path forward", "Gentle, non-forcing, pastoral.", "Jesus, lead me toward freedom, wisdom, and mercy."],
  ["Day 20", "Hope", "5 minutes", "5-in, 5-out", "Hope renewed", "Romans 15:13", "Let each steady breath become room for hope. Inhale trust. Exhale despair and discouragement.", "Dawn breaking over mountains", "Hopeful and warm.", "God of hope, fill me with joy and peace as I trust You."],
  ["Day 21", "Emotional Reset", "10 minutes", "Mixed calming breath", "Whole-heart reset", "Psalm 62:8", "Bring your whole heart before God: anxiety, anger, grief, hope, and need. Breathe slowly and pour out your heart to Him.", "Quiet chapel, trail, or still water", "Unhurried, emotionally safe, reflective.", "You are my refuge, Lord. I pour out my heart before You."],
  ["Day 22", "Be Still", "5 minutes", "Breath prayer", "Stillness", "Psalm 46:10", "Inhale: Be still. Exhale: And know. Let the words become quiet prayer.", "Still lake at sunrise", "Whisper-soft, meditative, much silence.", "Be exalted in my life, God, as I become still before You."],
  ["Day 23", "God's Peace", "5 minutes", "4-in, 6-out", "Peace", "Philippians 4:7", "Breathe in God's nearness. Breathe out fear. Let His peace guard what feels vulnerable.", "Gentle green valley", "Peaceful, protective, reassuring.", "Let Your peace guard my heart and mind today."],
  ["Day 24", "Trust", "5 minutes", "I trust, God leads", "Surrender", "Proverbs 3:5-6", "Inhale: I trust. Exhale: God leads. Release the need to understand every step before obeying.", "Winding trail through trees", "Trust-building, steady, grounded.", "Direct my path as I trust You with all my heart."],
  ["Day 25", "Strength", "5 minutes", "Deep steady breathing", "Renewal", "Isaiah 40:31", "Breathe slowly and imagine strength being renewed, not forced. Wait on the Lord with each breath.", "Eagle, open sky, mountain ridge", "Strong but calm, spacious.", "Renew my strength as I wait on You."],
  ["Day 26", "Rest", "6 minutes", "Soft belly breathing", "Receiving rest", "Matthew 11:28", "Let your breath become effortless. You do not have to earn rest; receive Christ's invitation.", "Soft bed, dusk, quiet field", "Sleepy, soft, slow.", "Jesus, I receive the rest You freely offer."],
  ["Day 27", "Gratitude Prayer", "5 minutes", "Thank You, Lord", "Thanksgiving", "Psalm 107:1", "Inhale: Thank You, Lord. Exhale: Thank You, Lord. Let gratitude settle into your body.", "Golden light over nature", "Grateful, warm, prayerful.", "Thank You for Your steadfast love and daily mercy."],
  ["Day 28", "Surrender", "6 minutes", "Long exhale surrender", "Letting go", "Luke 22:42", "Name one burden. Inhale God's presence. Exhale: Into Your hands. Repeat gently.", "Hands open, quiet trail, soft sky", "Reverent, gentle, not rushed.", "Not my will, but Yours be done."],
  ["Day 29", "Walking With God", "8 minutes", "Walking breath prayer", "Active prayer", "Micah 6:8", "Walk slowly if you can. Match prayer to your steps: justice, mercy, humility, with God.", "Walking path through trees", "Active, grounded, rhythmic.", "Teach me to walk humbly with You in ordinary life."],
  ["Day 30", "Celebration and Renewal", "10 minutes", "Review and prayer", "Celebration", "2 Corinthians 5:17", "For thirty days you have paused, breathed, reflected, and grown. Review what God has been forming in you.", "Sunrise, open road, joyful nature", "Celebratory but peaceful, with gratitude.", "Make me new, Lord, and continue this work in me."]
].map(([day, title, duration, technique, purpose, scripture, script, visual, voice, prayer, audioSrc], index) => ({
  id: `breathwork-${index + 1}`,
  day,
  title,
  duration,
  technique,
  purpose,
  scripture,
  script,
  visual,
  voice,
  prayer,
  audioSrc
}));
const premiumYogaSessions = [
  ["Session 1", "Begin in Stillness", "20 minutes", "Gentle flow", "Psalm 46:10", "Settle your body and attention before God before moving into the day.", "Opening seated breath prayer, neck and shoulder release, cat-cow, child's pose, low lunge, forward fold, gentle twist, supported rest.", "Soft morning light, mat near a window, calm greenery", "Quiet and reverent, with simple cues and Scripture woven between movements.", "Lord, quiet my striving and help my body and soul become still before You."],
  ["Session 2", "Morning Mercy Flow", "18 minutes", "Slow energizing flow", "Lamentations 3:22-23", "Receive the new morning as mercy and move with gratitude.", "Seated breath, sun-breath arms, tabletop mobility, low lunge, half split, mountain pose, standing side stretch, slow chair pose, restful forward fold.", "Sunrise, warm natural light, open space", "Hopeful and gentle, energizing without becoming rushed.", "Thank You for new mercy today. Help me walk in it with humility and joy."],
  ["Session 3", "Strength Renewed", "25 minutes", "Strength and balance", "Isaiah 40:31", "Build steady strength while remembering that renewal comes from waiting on the Lord.", "Grounding breath, mountain pose, chair pose, warrior one, warrior two, tree pose, bridge pose, reclined hamstring stretch, rest.", "Mountain ridge, strong trees, natural earth tones", "Encouraging, steady, reminding users to modify as needed.", "Renew my strength, Lord, and teach me to depend on You rather than force."],
  ["Session 4", "Peace for Anxiety", "22 minutes", "Calming restorative", "Philippians 4:6-7", "Release anxious tension through slow breath, supported shapes, and prayer.", "Hand-on-heart breathing, seated fold, supported child's pose, low supported lunge, legs up the wall or calves on chair, long rest.", "Soft blankets, gentle rain, peaceful room", "Very slow, low voice, with permission to pause and rest.", "God of peace, guard my heart and mind in Christ Jesus."],
  ["Session 5", "Open Hands Surrender", "20 minutes", "Gentle mobility", "1 Peter 5:7", "Practice surrender through open-handed movement and longer exhales.", "Seated open hands breath, shoulder rolls, cat-cow, thread the needle, low lunge with open palms, forward fold, supported rest.", "Hands open on mat, soft green background", "Tender and pastoral, emphasizing release without pressure.", "Father, I cast my cares on You because You care for me."],
  ["Session 6", "Gratitude Flow", "20 minutes", "Gentle standing flow", "Psalm 107:1", "Let movement become thanksgiving for the body, breath, and day God has given.", "Breath prayer, standing side stretch, slow sun-breaths, warrior two, peaceful warrior, wide fold, seated twist, rest.", "Garden, golden light, simple natural mat", "Warm, grateful, slightly brighter energy.", "Thank You, Lord, for Your steadfast love and for this body You created."],
  ["Session 7", "Rest for the Weary", "30 minutes", "Restorative", "Matthew 11:28", "Receive rest without earning it, performing for it, or apologizing for needing it.", "Supported child's pose, reclined butterfly, gentle twist, supported bridge, legs on chair, extended stillness with prayer.", "Dusk, candles or soft lamp, cozy blankets", "Slow and sleepy, with long silent spaces.", "Jesus, I come to You weary and receive the rest You freely offer."],
  ["Session 8", "Rooted in Love", "24 minutes", "Grounding flow", "Ephesians 3:17-19", "Move from a place of being rooted and loved by God.", "Seated grounding, wide-knee child's pose, cat-cow, low lunge, warrior two, triangle modification, seated forward fold, rest.", "Forest path, roots, moss, deep greens", "Grounded and reassuring.", "Root me deeply in Your love so I do not move from fear today."],
  ["Session 9", "Gentle Joy", "18 minutes", "Mood-lifting gentle flow", "Nehemiah 8:10", "Practice lightness, joy, and gratitude through accessible movement.", "Breath with smile, shoulder release, easy side bends, low lunge, gentle backbend, seated twist, happy baby or knees to chest, rest.", "Bright natural room, flowers, soft sunrise", "Kind, uplifting, not overly energetic.", "Let Your joy strengthen me from the inside out."],
  ["Session 10", "Patience Practice", "20 minutes", "Slow hold flow", "Galatians 5:22-23", "Use slow holds to practice patience, self-control, and Spirit-led steadiness.", "Slow breath, tabletop, low lunge holds, warrior two hold, supported balance, seated fold, long exhale rest.", "Quiet studio, slow-moving clouds", "Patient pacing, reminding users that discomfort should not become pain.", "Holy Spirit, grow patience and self-control in me."],
  ["Session 11", "Hope After Hardship", "25 minutes", "Gentle resilience flow", "Romans 15:13", "Make room for hope while honoring tenderness, grief, or fatigue.", "Grounding breath, supported child's pose, low lunge, gentle heart opener, seated twist, bridge or supported bridge, rest.", "Dawn after rain, open road, hopeful nature", "Compassionate and hope-filled.", "God of hope, fill me with peace as I trust You."],
  ["Session 12", "Prayer Walk Cooldown", "15 minutes", "Post-walk stretch", "Micah 6:8", "Pair walking with God and simple stretches for hips, calves, back, and breath.", "Standing calf stretch, quad stretch option, forward fold, low lunge, seated hamstring stretch, reclined twist, closing prayer.", "Outdoor trail, shoes by mat, trees", "Active and practical, like a peaceful cooldown.", "Teach me to walk humbly with You in every ordinary step."],
  ["Session 13", "Body as Temple", "22 minutes", "Mobility and care", "1 Corinthians 6:19-20", "Care for the body as a gift from God, without shame or comparison.", "Seated breath, wrist and ankle mobility, cat-cow, low lunge, gentle squat option, bridge, reclined stretch, rest.", "Natural light, water bottle, calm wellness setting", "Encouraging and body-kind, avoiding appearance-focused language.", "Help me honor this body as Your creation and care for it with wisdom."],
  ["Session 14", "Evening Release", "25 minutes", "Bedtime restorative", "Psalm 4:8", "Release the day and prepare for peaceful sleep in God's care.", "Slow breathing, seated fold, reclined butterfly, knees to chest, gentle twist, legs on pillow, extended rest.", "Evening light, soft blanket, peaceful bedroom", "Soft bedtime tone, minimal instruction, longer silence.", "In peace I lie down and sleep, for You alone make me dwell in safety."],
  ["Session 15", "Courage to Begin", "20 minutes", "Energizing beginner flow", "Joshua 1:9", "Invite courage for a new task, season, or act of obedience.", "Mountain pose, breath arms, chair, low lunge, warrior one, standing fold, seated stretch, prayer rest.", "Open doorway, sunrise, strong natural colors", "Confident and warm, with clear beginner modifications.", "Make me strong and courageous because You are with me."],
  ["Session 16", "Forgiveness and Freedom", "24 minutes", "Heart and hip release", "Ephesians 4:32", "Gently explore release while remembering forgiveness is a Spirit-led process.", "Breath prayer, supported heart opener, low lunge, pigeon modification or figure four, seated twist, long rest.", "Open field, unclenched hands, soft wind", "Gentle, non-forcing, with language of wisdom and boundaries.", "Lead me toward freedom, mercy, and healing at Your pace."],
  ["Session 17", "Peaceful Strength", "25 minutes", "Balanced strength flow", "2 Timothy 1:7", "Practice strength without fear, hurry, or striving.", "Grounding breath, chair, warrior two, side angle modification, plank option, child's pose, bridge, rest.", "Strong greens, quiet studio, mountain imagery", "Steady and empowering, with permission to lower intensity.", "God, You have given me power, love, and a sound mind."],
  ["Session 18", "Listen and Follow", "20 minutes", "Slow intuitive flow", "John 10:27", "Practice listening to God and noticing what your body needs today.", "Seated listening prayer, gentle neck release, cat-cow, choose child's pose or lunge, seated fold, stillness.", "Quiet path, open Bible nearby, natural light", "Reflective, spacious, inviting users to pause and choose wisely.", "Good Shepherd, help me hear Your voice and follow."],
  ["Session 19", "Grief and Comfort", "28 minutes", "Restorative comfort", "Psalm 34:18", "Create a gentle place for sadness, grief, or heaviness in God's nearness.", "Supported child's pose, reclined side rest, hand-on-heart breathing, gentle twist, legs supported, long prayer rest.", "Soft rain, blanket, muted greens", "Tender and slow, with no pressure to feel better quickly.", "Stay near to the brokenhearted, Lord, and comfort me with Your presence."],
  ["Session 20", "Faithful Finish", "20 minutes", "Gentle closing flow", "Hebrews 12:1-2", "Release distractions and finish the day or week with eyes fixed on Jesus.", "Breath prayer, standing fold, low lunge, warrior two, seated twist, forward fold, final rest.", "Trail finish line, sunset, peaceful road", "Steady, hopeful, reflective.", "Help me lay aside what weighs me down and keep my eyes on Jesus."],
  ["Session 21", "Renewed Commitment", "30 minutes", "Full gentle practice", "Romans 12:1", "Offer your whole self to God through prayerful movement, breath, gratitude, and rest.", "Opening prayer, seated breath, cat-cow, low lunge, warrior flow, balance, bridge, reclined twist, extended rest and dedication prayer.", "Beautiful natural studio, greenery, warm sunrise", "Premium finale tone: reverent, encouraging, complete.", "Lord, I offer my body, mind, time, and choices to You as worship."]
].map(([session, title, duration, style, scripture, intention, flow, visual, voice, prayer], index) => ({
  id: `faith-yoga-${index + 1}`,
  session,
  title,
  duration,
  style,
  scripture,
  intention,
  flow,
  visual,
  voice,
  prayer
}));
const premiumBibleStudySessions = [
  ["Study 1", "How to Read Scripture With God", "35 minutes", "Teaching + reflection", "2 Timothy 3:16-17", "Learn a simple pattern for reading Scripture with reverence, attention, context, and obedience.", "1. Scripture is God-breathed and formative. 2. Read for context before personal application. 3. Notice repeated words, commands, promises, warnings, and revelation of God's character. 4. End with one faithful response.", "What does this passage reveal about God? What is the difference between reading for information and reading for transformation?", "Read Psalm 1 slowly three times and write one observation, one question, and one response.", "Lord, open my eyes to Your word and shape my life through it."],
  ["Study 2", "The Story of Scripture", "40 minutes", "Big-picture teaching", "Luke 24:27", "Understand Scripture as one unified story of creation, fall, redemption, and restoration centered on Christ.", "1. Creation reveals God's good design. 2. The fall explains brokenness and sin. 3. Redemption unfolds through covenant and culminates in Jesus. 4. Restoration points to God's kingdom fulfilled.", "Where do I most often forget the larger story? How does seeing Jesus at the center change how I read the Bible?", "Map one Bible passage into creation, fall, redemption, or restoration.", "Jesus, teach me to see Your presence and purpose throughout Scripture."],
  ["Study 3", "Covenant and Promise", "35 minutes", "Teaching + worksheet", "Genesis 12:1-3", "Explore how God's covenants reveal His faithfulness and move His redemptive plan forward.", "1. Covenant is relationship with promise and responsibility. 2. Abraham receives promise and blessing. 3. Israel carries covenant identity. 4. Jesus fulfills the covenant hope.", "What promises of God do I need to remember? What responsibilities come with belonging to Him?", "Compare Genesis 12:1-3 and Galatians 3:13-14. Write what carries forward.", "Faithful God, help me trust Your promises and live as one who belongs to You."],
  ["Study 4", "Prayer That Becomes Relationship", "35 minutes", "Teaching + guided practice", "Matthew 6:9-13", "Study prayer as worship, dependence, confession, request, surrender, and daily relationship.", "1. Jesus teaches us to begin with the Father. 2. Prayer reorders desire around God's kingdom. 3. Daily bread teaches dependence. 4. Forgiveness and deliverance shape holy living.", "Which part of the Lord's Prayer do I rush past? How can prayer become more than asking for outcomes?", "Pray the Lord's Prayer slowly, pausing after every phrase to personalize it.", "Father, teach me to pray with trust, honesty, and surrender."],
  ["Study 5", "Hearing and Obeying God", "40 minutes", "Teaching + discernment", "John 10:27", "Learn biblical ways to listen for God's leading through Scripture, the Spirit, wisdom, counsel, and obedience.", "1. God's voice will not contradict Scripture. 2. Listening is formed by relationship. 3. Wisdom often comes through counsel and fruit. 4. Obedience clarifies what we already know.", "What has God already made clear that I have not acted on? What voices compete with His voice?", "Write one decision you are praying over and test it through Scripture, wisdom, counsel, and fruit.", "Good Shepherd, help me hear Your voice and follow with courage."],
  ["Study 6", "The Fruit of the Spirit", "35 minutes", "Character study", "Galatians 5:22-25", "Study spiritual growth as Spirit-formed character rather than self-improvement alone.", "1. Fruit grows from abiding and walking by the Spirit. 2. The fruit is relational and visible. 3. Growth often appears in ordinary pressure. 4. We keep in step with the Spirit through surrender and practice.", "Which fruit feels most needed in this season? Where is pressure revealing what still needs formation?", "Choose one fruit and practice it intentionally in one relationship today.", "Holy Spirit, form the character of Christ in me."],
  ["Study 7", "Spiritual Warfare Without Fear", "40 minutes", "Teaching + prayer", "Ephesians 6:10-18", "Understand spiritual warfare biblically through standing firm, truth, righteousness, faith, Scripture, and prayer.", "1. Our strength is in the Lord. 2. The armor is rooted in gospel realities. 3. Standing firm is active faithfulness. 4. Prayer keeps us alert and dependent.", "Where am I tempted to fight with fear, control, or anger instead of spiritual wisdom? Which piece of armor do I need today?", "Pray through each piece of armor and name one practical way to stand firm.", "Lord, strengthen me to stand firm in truth, faith, and prayer."],
  ["Study 8", "Women of Faith and Courage", "45 minutes", "Character study", "Hebrews 11:11", "Study biblical women who model courage, wisdom, prayer, leadership, loyalty, and surrendered faith.", "1. Sarah wrestles with promise and waiting. 2. Deborah leads with wisdom. 3. Ruth practices covenant loyalty. 4. Mary responds with surrendered obedience. 5. The women at the tomb witness resurrection hope.", "Which woman resonates with my season? What kind of courage does faith require from me?", "Choose one woman from Scripture and write what her story teaches about God.", "Lord, grow courageous and surrendered faith in me."],
  ["Study 9", "Marriage, Covenant, and Love", "40 minutes", "Relational study", "Ephesians 5:1-2", "Study marriage and close relationships through covenant love, service, humility, forgiveness, and Christlike sacrifice.", "1. Biblical love begins with Christ's love. 2. Covenant is deeper than convenience. 3. Humility and service reshape conflict. 4. Forgiveness and repair are practiced, not assumed.", "Where do I need to practice humility or repair? How does Christ's love challenge my normal reactions?", "Do one relationship-building action: listen, apologize, encourage, serve, or pray together.", "Jesus, teach me to love with humility, truth, and faithfulness."],
  ["Study 10", "Suffering, Lament, and Hope", "45 minutes", "Teaching + reflection", "Psalm 13:1-6", "Learn how Scripture gives language for pain without losing trust in God.", "1. Lament brings pain to God honestly. 2. Faith does not require pretending. 3. Biblical hope remembers God's steadfast love. 4. Community helps carry grief and hardship.", "What pain have I avoided bringing honestly to God? What truth about God can I cling to without denying the hurt?", "Write a short lament: complaint, request, trust, and praise.", "God of mercy, meet me in pain and teach me hope that is honest."],
  ["Study 11", "Body, Temple, and Worship", "35 minutes", "Wellness theology", "1 Corinthians 6:19-20", "Study the body as God's creation and temple, connecting movement, rest, nourishment, and worship.", "1. The body is not an enemy to faith. 2. God created embodied worship. 3. Stewardship is not shame or obsession. 4. Rest, movement, and care can become devotion.", "Where do I need to reject shame around my body? What would faithful care look like this week?", "Choose one body-care practice as worship: water, sleep, movement, nourishing food, or rest.", "Creator God, help me honor the body You made with wisdom and gratitude."],
  ["Study 12", "Sharing Faith With Grace", "40 minutes", "Mission practice", "1 Peter 3:15-16", "Learn to share faith through gentleness, respect, testimony, curiosity, and Spirit-led courage.", "1. Witness begins with hope in Christ. 2. Gentleness and respect matter. 3. Testimony tells what God has done. 4. Questions can open faithful conversation. 5. Love is the posture of mission.", "Who might God be inviting me to love and listen to? What part of my story points to God's grace?", "Write a three-sentence testimony: before, encounter with God, and what changed.", "Lord, help me speak of You with courage, gentleness, and love."]
].map(([session, title, duration, format, scripture, aim, outline, questions, practice, prayer], index) => ({
  id: `bible-study-${index + 1}`,
  session,
  title,
  duration,
  format,
  scripture,
  aim,
  outline,
  questions,
  practice,
  prayer
}));
const premiumWalkingSessions = [
  ["Walk 1", "Begin the Day With God", "15 minutes", "Easy pace", "Psalm 143:8", "Start the day by giving your attention, plans, and pace to God.", "Minute 1-3: walk slowly and notice your breath. Minute 4-8: pray through your day by name. Minute 9-12: ask God to show you one faithful priority. Minute 13-15: walk in gratitude and commit your steps to Him.", "What needs to be surrendered before the day begins? Who needs prayer before I see them today?", "Sunrise path, neighborhood sidewalk, soft instrumental music", "Lord, let me hear Your steadfast love this morning and show me the way I should go."],
  ["Walk 2", "Cast Your Cares", "20 minutes", "Slow steady pace", "1 Peter 5:7", "Use your walk to release worry into God's care instead of carrying it alone.", "First 5 minutes: name your worries honestly. Next 10 minutes: with each exhale, imagine handing one care to God. Final 5 minutes: thank Him for caring for you personally.", "What care keeps returning to my mind? What would trusting God with it look like today?", "Tree-lined trail, cloudy sky clearing, gentle ambient sound", "Father, I cast these cares on You because You care for me."],
  ["Walk 3", "Gratitude Walk", "15 minutes", "Comfortable pace", "Psalm 107:1", "Train your attention toward God's gifts through embodied thanksgiving.", "Walk and name one gift every few steps: breath, body, shelter, friendship, mercy, forgiveness, provision, beauty. End by thanking God for one gift you usually overlook.", "What ordinary gift has become too familiar? How can gratitude reshape my attitude today?", "Garden path, flowers, warm daylight", "Thank You, Lord, for Your steadfast love and daily goodness."],
  ["Walk 4", "Prayer for Others", "25 minutes", "Easy to moderate pace", "1 Timothy 2:1", "Turn movement into intercession for family, friends, community, and the world.", "First 5 minutes: pray for those closest to you. Next 5: pray for someone struggling. Next 5: pray for leaders and community. Next 5: pray for someone difficult. Final 5: ask God how you can be part of His answer.", "Who needs prayer, encouragement, or practical help today? Who is hard for me to pray for?", "Neighborhood walk, city park, wide community shots", "Lord, make me faithful in prayer and generous in love."],
  ["Walk 5", "Peace in the Middle", "20 minutes", "Gentle pace", "Philippians 4:6-7", "Bring anxiety to God and let His peace guard your heart while you move.", "Walk slowly. Inhale: God is near. Exhale: I release fear. Pause midway if possible and pray honestly about what feels unsettled. Resume with slower steps and open hands.", "What request do I need to bring to God with thanksgiving? Where do I need peace to guard me?", "Quiet path near water, soft blue-green tones", "God of peace, guard my heart and mind in Christ Jesus."],
  ["Walk 6", "Wisdom Walk", "20 minutes", "Thoughtful pace", "James 1:5", "Seek God's wisdom for a choice, conversation, or next step.", "First third: describe the decision to God. Second third: ask for wisdom and listen quietly. Final third: name the next faithful step, even if the full answer is not clear.", "What decision needs wisdom rather than impulse? What counsel or Scripture should I seek before acting?", "Forked trail, open Bible before walking, calm focus music", "Generous God, give me wisdom and help me receive it with humility."],
  ["Walk 7", "Forgiveness Walk", "25 minutes", "Slow pace", "Ephesians 4:32", "Begin releasing resentment while asking God for wisdom, boundaries, and mercy.", "Walk slowly and name the hurt without minimizing it. Ask God what forgiveness requires and what it does not require. End by praying for healing, wisdom, and freedom.", "What am I still rehearsing? What boundary, confession, or prayer might help me move toward freedom?", "Open field, path forward, soft wind", "Jesus, lead me toward forgiveness, healing, and wise freedom."],
  ["Walk 8", "Strength Renewed", "30 minutes", "Moderate pace", "Isaiah 40:31", "Let a longer walk remind you that endurance comes from waiting on the Lord.", "Begin easy for 5 minutes. Walk steady for 20 minutes while repeating: My strength is renewed in You. Cool down for 5 minutes with gratitude for what your body can do today.", "Where have I confused forcing with faithfulness? How can I wait on God while still taking faithful steps?", "Long trail, mountain or open sky, steady rhythm", "Lord, renew my strength as I wait on You."],
  ["Walk 9", "Walk Humbly", "20 minutes", "Easy pace", "Micah 6:8", "Practice justice, mercy, and humility while walking with God.", "Divide the walk into three parts: justice, mercy, humility. Ask God where each one needs to become visible in your life today.", "Where can I act justly? Who needs mercy from me? What would humility look like in my next conversation?", "Simple neighborhood walk, real-life ordinary setting", "Teach me to do justice, love mercy, and walk humbly with You."],
  ["Walk 10", "Evening Examen Walk", "15 minutes", "Slow reflective pace", "Psalm 139:23-24", "Review the day with God before rest.", "Walk slowly and review the day: gratitude, tension, sin, grace, and tomorrow. Ask God to search your heart without shame and lead you in His way.", "Where did I notice God today? What do I need to confess, release, or carry into tomorrow with wisdom?", "Sunset path, quiet street, evening light", "Search me, Lord, and lead me in the way everlasting."],
  ["Walk 11", "Hope After Hardship", "20 minutes", "Gentle pace", "Romans 15:13", "Make space for hope without pretending hardship is easy.", "Walk gently. Name what hurts, then name what remains true about God. Let each step be a small act of hope.", "What pain needs honesty? What promise or truth helps me take the next step?", "Dawn after rain, open path", "God of hope, fill me with peace as I trust You."],
  ["Walk 12", "Celebration Walk", "30 minutes", "Joyful comfortable pace", "Psalm 150:6", "Celebrate God's faithfulness and mark progress with embodied praise.", "Walk at a comfortable pace. Recall answered prayers, completed steps, growth, and grace. End with praise, either spoken quietly or written afterward.", "What has God brought me through? What growth should I celebrate instead of rushing past?", "Bright trail, sunlight through trees, joyful but peaceful music", "Let everything in me praise You, Lord. Thank You for walking with me."]
].map(([session, title, duration, pace, scripture, intention, guide, prompts, visual, prayer], index) => ({
  id: `walking-${index + 1}`,
  session,
  title,
  duration,
  pace,
  scripture,
  intention,
  guide,
  prompts,
  visual,
  prayer
}));

const backgroundMusicTracks = [
  ["Sunlit Dream", "/assets/music/sunlit-dream.mp3?v=20260701-playlist"],
  ["Nature Breath", "/assets/music/nature-breath.mp3?v=20260701-playlist"],
  ["Sacred Breath", "/assets/music/sacred-breath.mp3?v=20260701-playlist"],
  ["Holy Resonance", "/assets/music/holy-resonance.mp3?v=20260701-playlist"],
  ["Eden Echoes", "/assets/music/eden-echoes.mp3?v=20260701-playlist"],
  ["Living Waters", "/assets/music/living-waters.mp3?v=20260701-playlist"],
  ["Creation Sings", "/assets/music/creation-sings.mp3?v=20260701-playlist"]
].map(([title, src], index) => ({ title, src, index }));

const walkPathSteps = [
  ["Pause", "Psalm 46:10", "Slow down, breathe, and notice God's presence before moving forward.", "Jesus often withdrew to quiet places.", "Luke 5:16"],
  ["Pray", "Mark 1:35", "Speak honestly with God, listen, and bring your real life before Him.", "Jesus regularly prayed to the Father.", "Mark 1:35"],
  ["Listen", "John 5:19", "Receive Scripture slowly, not just to finish, but to hear and obey.", "Jesus lived in perfect dependence on the Father's will.", "John 5:19"],
  ["Walk", "Luke 24:15", "Move with God through walking, stretching, breathing, or another safe activity.", "Jesus walked with people and taught along the way.", "Luke 24:15"],
  ["Live", "John 13:14-15", "Let faith become obedience, mercy, service, repentance, and love.", "Jesus embodied humble love and called His followers to do likewise.", "John 13:14-15"],
  ["Remember", "Luke 22:19", "Mark what God is teaching, answering, healing, and forming in you.", "Jesus gave His people a way to remember Him.", "Luke 22:19"],
  ["Share", "Matthew 28:19-20", "Encourage, pray with, serve, testify, invite, or bless someone else.", "Jesus sent His followers to make disciples.", "Matthew 28:19-20"]
].map(([name, verse, summary, jesus, jesusReference], index) => ({ name, verse, summary, jesus, jesusReference, index }));

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
  prayerBoardOpen: localStorage.getItem("walkWithGodPrayerBoardOpen") === "true",
  activeBreathworkIndex: Number(localStorage.getItem("walkWithGodBreathworkIndex") || 0),
  activeYogaIndex: Number(localStorage.getItem("walkWithGodYogaIndex") || 0),
  activeBibleStudyIndex: Number(localStorage.getItem("walkWithGodBibleStudyIndex") || 0),
  activeWalkingIndex: Number(localStorage.getItem("walkWithGodWalkingIndex") || 0),
  premiumPanels: JSON.parse(localStorage.getItem("walkWithGodPremiumPanels") || "{}"),
  currentPassageReference: "",
  currentPassageText: "",
  isReadingPassage: false,
  activeMusicIndex: Number(localStorage.getItem("walkWithGodMusicIndex") || 0),
  speechSettings: JSON.parse(localStorage.getItem("walkWithGodSpeechSettings") || '{"voiceURI":"","rate":0.9,"pitch":1}'),
  premiumContent: [],
  isPremium: false,
  deferredInstallPrompt: null,
  reminder: JSON.parse(localStorage.getItem("walkWithGodReminder") || '{"time":"07:00","message":"Spend uninterrupted time with God today.","channels":{"push":true,"email":false,"sms":false},"email":"","phone":""}'),
  user: null,
  supportMessages: [],
  selectedAdminUserId: "",
  authMode: "login",
  lastSyncedActivePosition: ""
};

const themeList = document.querySelector("#themeList");
const breatheInText = document.querySelector("#breatheInText");
const breatheOutText = document.querySelector("#breatheOutText");
const serverWarning = document.querySelector("#serverWarning");
const heroActions = document.querySelector("#heroActions");
const aboutSection = document.querySelector("#about");
const lockedBenefits = document.querySelector("#lockedBenefits");
const gatedSections = [
  document.querySelector("#today"),
  document.querySelector("#homeDashboard"),
  document.querySelector("#walkPath"),
  document.querySelector("#themes"),
  document.querySelector("#notesLibrary"),
  document.querySelector("#community"),
  document.querySelector("#premium"),
  document.querySelector("#breathwork"),
  document.querySelector("#faithYoga"),
  document.querySelector("#premiumBibleStudy"),
  document.querySelector("#premiumWalking"),
  document.querySelector("#install"),
  document.querySelector("#mobileAppNav"),
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
const homeDashboardTitle = document.querySelector("#homeDashboardTitle");
const homeDashboardCopy = document.querySelector("#homeDashboardCopy");
const dashboardStreak = document.querySelector("#dashboardStreak");
const dashboardProgress = document.querySelector("#dashboardProgress");
const dashboardNotes = document.querySelector("#dashboardNotes");
const pathSteps = document.querySelector("#pathSteps");
const pathTodayCard = document.querySelector("#pathTodayCard");
const pathTodayMark = document.querySelector("#pathTodayMark");
const pathTodayLabel = document.querySelector("#pathTodayLabel");
const pathTodayTitle = document.querySelector("#pathTodayTitle");
const pathTodayCopy = document.querySelector("#pathTodayCopy");
const pathTodayJesus = document.querySelector("#pathTodayJesus");
const accountStatus = document.querySelector("#accountStatus");
const accountHeading = document.querySelector("#accountHeading");
const accountCopy = document.querySelector("#accountCopy");
const supportMessageList = document.querySelector("#supportMessageList");
const accountActions = document.querySelector("#accountActions");
const accountShortcuts = document.querySelector("#accountShortcuts");
const showSignupButton = document.querySelector("#showSignupButton");
const showLoginButton = document.querySelector("#showLoginButton");
const showReminderSettingsButton = document.querySelector("#showReminderSettingsButton");
const musicToggleButton = document.querySelector("#musicToggleButton");
const musicSkipButton = document.querySelector("#musicSkipButton");
const backgroundMusic = document.querySelector("#backgroundMusic");
const musicStatus = document.querySelector("#musicStatus");
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
const verseText = document.querySelector("#verseText");
const readPassageButton = document.querySelector("#readPassageButton");
const readPassageStatus = document.querySelector("#readPassageStatus");
const passageRateInput = document.querySelector("#passageRateInput");
const passagePitchInput = document.querySelector("#passagePitchInput");
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
const notesLibraryList = document.querySelector("#notesLibraryList");
const completeButton = document.querySelector("#completeButton");
const nextButton = document.querySelector("#nextButton");
const focusCelebrationOverlay = document.querySelector("#focusCelebrationOverlay");
const focusCelebrationTitle = document.querySelector("#focusCelebrationTitle");
const focusCelebrationCopy = document.querySelector("#focusCelebrationCopy");
const celebrationNextFocusButton = document.querySelector("#celebrationNextFocusButton");
const celebrationCloseButton = document.querySelector("#celebrationCloseButton");
const reminderForm = document.querySelector("#reminderForm");
const reminderTime = document.querySelector("#reminderTime");
const reminderMessage = document.querySelector("#reminderMessage");
const reminderStatus = document.querySelector("#reminderStatus");
const reminderPush = document.querySelector("#reminderPush");
const reminderEmail = document.querySelector("#reminderEmail");
const reminderSms = document.querySelector("#reminderSms");
const reminderAvailabilityNote = document.querySelector("#reminderAvailabilityNote");
const reminderEmailLabel = document.querySelector("#reminderEmailLabel");
const reminderEmailStatus = document.querySelector("#reminderEmailStatus");
const smsConsent = document.querySelector("#smsConsent");
const smsConsentWrapper = document.querySelector("#smsConsentWrapper");
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
const prayerBoard = document.querySelector("#prayerBoard");
const togglePrayerBoardButton = document.querySelector("#togglePrayerBoardButton");
const prayerInput = document.querySelector("#prayerInput");
const anonymousPrayer = document.querySelector("#anonymousPrayer");
const prayerStatus = document.querySelector("#prayerStatus");
const prayerFeed = document.querySelector("#prayerFeed");
const premiumGrid = document.querySelector("#premiumGrid");
const premiumStatus = document.querySelector("#premiumStatus");
const breathworkLockNote = document.querySelector("#breathworkLockNote");
const breathworkList = document.querySelector("#breathworkList");
const breathworkDayLabel = document.querySelector("#breathworkDayLabel");
const breathworkTitle = document.querySelector("#breathworkTitle");
const breathworkDuration = document.querySelector("#breathworkDuration");
const breathworkTechnique = document.querySelector("#breathworkTechnique");
const breathworkScripture = document.querySelector("#breathworkScripture");
const breathworkPurpose = document.querySelector("#breathworkPurpose");
const breathworkScript = document.querySelector("#breathworkScript");
const breathworkVisual = document.querySelector("#breathworkVisual");
const breathworkVoice = document.querySelector("#breathworkVoice");
const breathworkPrayer = document.querySelector("#breathworkPrayer");
const breathworkMediaCard = document.querySelector("#breathworkMediaCard");
const breathworkAudio = document.querySelector("#breathworkAudio");
const breathworkAudioNote = document.querySelector("#breathworkAudioNote");
const yogaLockNote = document.querySelector("#yogaLockNote");
const yogaList = document.querySelector("#yogaList");
const yogaSessionLabel = document.querySelector("#yogaSessionLabel");
const yogaTitle = document.querySelector("#yogaTitle");
const yogaDuration = document.querySelector("#yogaDuration");
const yogaStyle = document.querySelector("#yogaStyle");
const yogaScripture = document.querySelector("#yogaScripture");
const yogaIntention = document.querySelector("#yogaIntention");
const yogaFlow = document.querySelector("#yogaFlow");
const yogaVisual = document.querySelector("#yogaVisual");
const yogaVoice = document.querySelector("#yogaVoice");
const yogaPrayer = document.querySelector("#yogaPrayer");
const bibleStudyLockNote = document.querySelector("#bibleStudyLockNote");
const bibleStudyList = document.querySelector("#bibleStudyList");
const bibleStudySessionLabel = document.querySelector("#bibleStudySessionLabel");
const bibleStudyTitle = document.querySelector("#bibleStudyTitle");
const bibleStudyDuration = document.querySelector("#bibleStudyDuration");
const bibleStudyFormat = document.querySelector("#bibleStudyFormat");
const bibleStudyScripture = document.querySelector("#bibleStudyScripture");
const bibleStudyAim = document.querySelector("#bibleStudyAim");
const bibleStudyOutline = document.querySelector("#bibleStudyOutline");
const bibleStudyQuestions = document.querySelector("#bibleStudyQuestions");
const bibleStudyPractice = document.querySelector("#bibleStudyPractice");
const bibleStudyPrayer = document.querySelector("#bibleStudyPrayer");
const walkingLockNote = document.querySelector("#walkingLockNote");
const walkingList = document.querySelector("#walkingList");
const walkingSessionLabel = document.querySelector("#walkingSessionLabel");
const walkingTitle = document.querySelector("#walkingTitle");
const walkingDuration = document.querySelector("#walkingDuration");
const walkingPace = document.querySelector("#walkingPace");
const walkingScripture = document.querySelector("#walkingScripture");
const walkingIntention = document.querySelector("#walkingIntention");
const walkingGuide = document.querySelector("#walkingGuide");
const walkingPrompts = document.querySelector("#walkingPrompts");
const walkingVisual = document.querySelector("#walkingVisual");
const walkingPrayer = document.querySelector("#walkingPrayer");
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
const premiumContentForm = document.querySelector("#premiumContentForm");
const premiumContentType = document.querySelector("#premiumContentType");
const premiumContentTitle = document.querySelector("#premiumContentTitle");
const premiumContentLength = document.querySelector("#premiumContentLength");
const premiumContentScripture = document.querySelector("#premiumContentScripture");
const premiumContentDescription = document.querySelector("#premiumContentDescription");
const premiumContentUrl = document.querySelector("#premiumContentUrl");
const premiumContentStatus = document.querySelector("#premiumContentStatus");
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
const adminCommunityList = document.querySelector("#adminCommunityList");
const adminPrayerList = document.querySelector("#adminPrayerList");
const premiumPanelLabels = {
  premiumOverview: "Premium Preview",
  breathwork: "Breathwork Prayer",
  faithYoga: "Faith-Led Yoga",
  bibleStudy: "Bible Study",
  walking: "Walking Sessions"
};

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

async function loadReminderAvailability() {
  try {
    const health = await apiFetch("/api/health");
    reminderChannelAvailability = {
      push: Boolean(health.pushReady),
      email: Boolean(health.emailReady),
      sms: Boolean(health.smsReady)
    };
  } catch {
    reminderChannelAvailability = { push: false, email: false, sms: false };
  }
}

function applyServerProgress(progress) {
  state.completed = {};
  for (const item of progress || []) {
    if (!state.completed[item.focusId]) state.completed[item.focusId] = new Set();
    state.completed[item.focusId].add(item.dayIndex);
  }
  saveCompleted();
}

function focusById(focusId) {
  return state.focuses.find((focus) => focus.id === focusId) || null;
}

function chooseFallbackActiveFocus() {
  return activeFocus() || state.focuses.find((focus) => completedSet(focus.id).size < focus.days.length) || state.focuses[0] || null;
}

function applyServerActivePosition(activePosition) {
  const serverFocus = focusById(activePosition?.focusId);
  if (serverFocus) {
    state.activeId = serverFocus.id;
    state.activeDayIndex = Math.max(0, Math.min(Number(activePosition.dayIndex) || 0, serverFocus.days.length - 1));
  } else {
    const fallbackFocus = chooseFallbackActiveFocus();
    if (!fallbackFocus) return;
    state.activeId = fallbackFocus.id;
    state.activeDayIndex = nextOpenDay(fallbackFocus);
  }
  saveActivePosition({ sync: false });
}

function applyServerNotes(notes) {
  const mergedNotes = { ...state.notes };
  for (const item of notes || []) {
    mergedNotes[`${item.focusId}:${item.dayIndex}`] = item.text;
  }
  state.notes = mergedNotes;
  saveNotes();
}

async function loadServerState() {
  if (!state.user) return;
  const [progressResult, notesResult, reminderResult, premiumResult, activePositionResult] = await Promise.all([
    apiFetch("/api/progress"),
    apiFetch("/api/notes"),
    apiFetch("/api/reminder"),
    apiFetch("/api/premium-content"),
    apiFetch("/api/active-position")
  ]);
  applyServerProgress(progressResult.progress);
  applyServerActivePosition(activePositionResult.activePosition);
  applyServerNotes(notesResult.notes);
  state.premiumContent = premiumResult.content || [];
  state.isPremium = Boolean(premiumResult.isPremium);
  if (reminderResult.reminder) {
    state.reminder = {
      time: reminderResult.reminder.time,
      message: reminderResult.reminder.message,
      channels: reminderResult.reminder.channels || { push: true, email: false, sms: false },
      email: reminderResult.reminder.email || "",
      phone: reminderResult.reminder.phone || "",
      timeZone: reminderResult.reminder.timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone || "America/New_York"
    };
    saveReminder();
  }
  await loadCommunity();
  await loadPrayerRequests();
  await loadSupportMessages();
  if (state.user?.role === "admin") await loadAdminDashboard();
}

async function loadCommunity() {
  try {
    const result = await apiFetch("/api/community");
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

async function loadPremiumContent() {
  if (!state.user) {
    state.premiumContent = [];
    state.isPremium = false;
    return;
  }
  try {
    const result = await apiFetch("/api/premium-content");
    state.premiumContent = result.content || [];
    state.isPremium = Boolean(result.isPremium);
  } catch {
    state.premiumContent = [];
    state.isPremium = false;
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
    if (musicToggleButton) musicToggleButton.hidden = false;
    if (musicSkipButton) musicSkipButton.hidden = false;
    logoutButton.hidden = false;
    if (accountShortcuts) accountShortcuts.hidden = false;
  } else {
    accountHeading.textContent = "Start with a free account";
    accountCopy.textContent = "Create an account or log in to open your daily focuses, prayer requests, community, notes, progress, and reminders.";
    accountStatus.textContent = "Choose one option below to begin.";
    showSignupButton.hidden = false;
    showLoginButton.hidden = false;
    showReminderSettingsButton.hidden = true;
    if (musicToggleButton) musicToggleButton.hidden = true;
    if (musicSkipButton) musicSkipButton.hidden = true;
    reminderSettingsPanel.hidden = true;
    logoutButton.hidden = true;
    if (accountShortcuts) accountShortcuts.hidden = true;
  }
  onboardingPanel.hidden = Boolean(state.activeId) || !state.user;
  supportMessageList.innerHTML = state.supportMessages.length
    ? state.supportMessages
        .slice(-3)
        .reverse()
        .map((message) => `<article class="support-message"><strong>Admin message</strong><p>${escapeHtml(message.text)}</p></article>`)
        .join("")
    : "";
  renderMusicControl();
}

function musicPreferred() {
  return localStorage.getItem("walkWithGodMusicEnabled") === "true";
}

function activeMusicTrack() {
  state.activeMusicIndex = Math.max(0, Math.min(state.activeMusicIndex, backgroundMusicTracks.length - 1));
  return backgroundMusicTracks[state.activeMusicIndex] || backgroundMusicTracks[0];
}

function loadActiveMusicTrack() {
  if (!backgroundMusic) return null;
  const track = activeMusicTrack();
  if (!backgroundMusic.src.endsWith(track.src)) {
    backgroundMusic.src = track.src;
    backgroundMusic.load();
  }
  return track;
}

function renderMusicControl() {
  if (!musicToggleButton || !backgroundMusic) return;
  const isPlaying = !backgroundMusic.paused;
  const track = activeMusicTrack();
  musicToggleButton.textContent = isPlaying ? "Pause Music" : "Play Music";
  musicToggleButton.classList.toggle("is-playing", isPlaying);
  musicToggleButton.title = `${isPlaying ? "Now playing" : "Ready to play"}: ${track.title}`;
  if (musicSkipButton) musicSkipButton.title = `Skip ${track.title}`;
  if (musicStatus && !state.user) musicStatus.textContent = "";
}

async function playBackgroundMusic() {
  if (!backgroundMusic) return;
  const track = loadActiveMusicTrack();
  backgroundMusic.volume = 0.28;
  try {
    await backgroundMusic.play();
    localStorage.setItem("walkWithGodMusicEnabled", "true");
    if (musicStatus) musicStatus.textContent = `Now playing: ${track.title}.`;
  } catch {
    localStorage.removeItem("walkWithGodMusicEnabled");
    if (musicStatus) musicStatus.textContent = "Tap Play Music again if your browser blocked audio.";
  }
  renderMusicControl();
}

function pauseBackgroundMusic(message = "Music paused.") {
  if (!backgroundMusic) return;
  backgroundMusic.pause();
  localStorage.removeItem("walkWithGodMusicEnabled");
  if (musicStatus) musicStatus.textContent = message;
  renderMusicControl();
}

function playNextBackgroundTrack({ keepPlaying = false } = {}) {
  if (!backgroundMusicTracks.length) return;
  const wasPlaying = keepPlaying || (backgroundMusic && !backgroundMusic.paused);
  state.activeMusicIndex = (state.activeMusicIndex + 1) % backgroundMusicTracks.length;
  localStorage.setItem("walkWithGodMusicIndex", String(state.activeMusicIndex));
  const track = loadActiveMusicTrack();
  if (musicStatus) musicStatus.textContent = `Next song: ${track.title}.`;
  if (wasPlaying) {
    playBackgroundMusic();
  } else {
    renderMusicControl();
  }
}

function renderAccessGate() {
  const isSignedIn = Boolean(state.user);
  if (heroActions) heroActions.hidden = isSignedIn;
  aboutSection.hidden = isSignedIn;
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

function renderHomeDashboard() {
  if (!homeDashboardTitle) return;
  const focus = activeFocus() || state.focuses[0];
  const dayIndex = nextOpenDay(focus);
  const day = focus.days[dayIndex];
  const completeCount = completedSet(focus.id).size;
  const progressPercent = Math.round((completeCount / focus.days.length) * 100);
  const notesCount = noteEntries().length;

  homeDashboardTitle.textContent = `${day[1]} is ready`;
  homeDashboardCopy.textContent = `${focus.title}: ${day[2]}. Read, move, pray, reflect, and live one faithful deed today.`;
  dashboardStreak.textContent = String(streakDays());
  dashboardProgress.textContent = `${progressPercent}%`;
  dashboardNotes.textContent = String(notesCount);
}

function pathStepByName(name) {
  return walkPathSteps.find((step) => step.name === name) || walkPathSteps[0];
}

function pathStepForDay(focus, day, dayNumber) {
  const text = `${focus?.title || ""} ${day?.join(" ") || ""}`.toLowerCase();
  const rules = [
    ["Pause", ["be still", "rest", "sabbath", "peace", "anxiety", "fear", "quiet", "stillness", "compassionate father", "grief", "suffering", "hardship"]],
    ["Pray", ["pray", "prayer", "intercession", "confession", "repent", "return to me", "honest prayer", "lord's prayer", "ask", "pour out"]],
    ["Listen", ["listen", "scripture", "word", "wisdom", "truth", "prophet", "teaching", "voice", "discern", "command", "law", "study", "guided into truth"]],
    ["Walk", ["walk", "body", "health", "wellness", "strength", "renewed", "creation", "created", "image", "movement", "work with your whole heart"]],
    ["Live", ["serve", "obedience", "forgive", "mercy", "love", "faithful", "good works", "workmanship", "fruit", "marriage", "deed", "purpose", "humility"]],
    ["Remember", ["remember", "covenant", "redeem", "redemption", "thank", "gratitude", "mercy made new", "loved", "god loves", "favorite", "answered"]],
    ["Share", ["share", "witness", "sent", "mission", "good news", "speak out", "make disciples", "community", "light", "testimony", "announce"]]
  ];
  const matched = rules.find(([, keywords]) => keywords.some((keyword) => text.includes(keyword)));
  if (matched) return pathStepByName(matched[0]);
  return walkPathSteps[(Math.max(1, dayNumber) - 1) % walkPathSteps.length];
}

function renderWalkPath() {
  if (!pathSteps) return;
  const focus = activeFocus() || state.focuses[0];
  const dayIndex = focus ? nextOpenDay(focus) : 0;
  const dayNumber = Number((focus?.days[dayIndex]?.[0]?.match(/\d+/) || [dayIndex + 1])[0]);
  const activeStep = pathStepForDay(focus, focus?.days[dayIndex], dayNumber);
  pathSteps.innerHTML = walkPathSteps
    .map((step) => `
      <article class="path-step ${step.name === activeStep.name ? "is-active" : ""}">
        <span class="path-stone" aria-hidden="true">${step.index + 1}</span>
        <div>
          <h3>${step.name}</h3>
          <p>${step.summary}</p>
          <small>${step.verse} · ${step.jesus} (${step.jesusReference})</small>
        </div>
      </article>
    `)
    .join("");
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

function noteEntries() {
  const keys = [...new Set([...Object.keys(state.notes), ...Object.keys(state.checkins)])];
  return keys
    .map((key) => {
      const text = state.notes[key] || "";
      const checkin = state.checkins[key] || {};
      const [focusId, dayIndexText] = key.split(":");
      const dayIndex = Number(dayIndexText);
      const focus = state.focuses.find((item) => item.id === focusId);
      const day = focus?.days[dayIndex];
      return { key, focus, focusId, dayIndex, day, text, checkin };
    })
    .filter((entry) => entry.focus && entry.day)
    .filter((entry) => entry.text.trim() || entry.checkin.stoodOut || entry.checkin.invitation || entry.checkin.bless)
    .sort((a, b) => a.focus.title.localeCompare(b.focus.title) || a.dayIndex - b.dayIndex);
}

function notePreview(entry) {
  const parts = [];
  if (entry.text.trim()) parts.push(entry.text.trim());
  if (entry.checkin.stoodOut) parts.push(`What stood out: ${entry.checkin.stoodOut}`);
  if (entry.checkin.invitation) parts.push(`God may be inviting me to: ${entry.checkin.invitation}`);
  if (entry.checkin.bless) parts.push(`Who I can bless: ${entry.checkin.bless}`);
  return parts.join("\n");
}

function renderNotesLibrary() {
  const entries = noteEntries();
  notesLibraryList.innerHTML = entries.length
    ? entries
        .map((entry) => `
          <article class="note-library-item">
            <div>
              <p class="block-label">${escapeHtml(entry.focus.title)} - ${escapeHtml(entry.day[0])}</p>
              <h3>${escapeHtml(entry.day[1])}</h3>
              <p class="scripture-reference">${escapeHtml(entry.day[2])}</p>
              <p>${escapeHtml(notePreview(entry))}</p>
            </div>
            <button class="quiet-button open-note-day" type="button" data-focus-id="${escapeHtml(entry.focusId)}" data-day-index="${entry.dayIndex}">Open Day</button>
          </article>
        `)
        .join("")
    : '<p class="empty-feed">Saved private notes will appear here.</p>';
}

function renderCompletion(focus, isFocusComplete) {
  if (!isFocusComplete) return "";
  return `
    <div class="completion-card">
      <div class="completion-emblem" aria-hidden="true">✓</div>
      <p class="block-label">Focus Complete</p>
      <h3>${escapeHtml(focus.title)} completed</h3>
      <p>You walked through every day of this focus. Pause, breathe, and thank God for the Scripture, practice, and obedience He has been forming in you.</p>
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

function deedForDay(focus, day, dayNumber) {
  const title = day[1].toLowerCase();
  const focusTitle = focus.title.toLowerCase();
  const reference = day[2].toLowerCase();
  const specificRules = [
    ["light", "Bring light into one conversation today through honesty, encouragement, or a short prayer with someone."],
    ["sky", "Step outside for two quiet minutes, look up, and thank God for His order before your next task."],
    ["vegetation", "Prepare or share something nourishing today as a reminder that God provides through creation."],
    ["image", "Choose one person to intentionally honor today as someone made in God's image."],
    ["rests", "Set aside one small nonessential task and receive that time as worshipful rest."],
    ["sin", "Confess one specific sin or hidden compromise to God and take one concrete step away from it."],
    ["cain", "Interrupt resentment quickly today by praying blessing over someone you are tempted to compare yourself with."],
    ["noah", "Obey one clear instruction from God today before you feel fully ready."],
    ["covenant", "Remember one promise of God and speak it out loud before making a decision."],
    ["redeemer", "Write one sentence of hope and send it to someone who needs to remember God is near."],
    ["repent", "Turn from one avoidant habit today and replace it with a small act of obedience."],
    ["gate", "Before entering a room, meeting, or conversation, ask Jesus to lead how you enter it."],
    ["speak out", "Tell one person something specific God has done for you."],
    ["coming king", "Make one choice today as if Christ's kingdom is more real than today's pressure."],
    ["no other gods", "Name one thing competing for first place in your heart and fast from it for one hour today."],
    ["no idols", "Put away or pause one comfort, app, purchase, or habit that has been pulling your attention from God."],
    ["god's name", "Use your words to honor God today: no careless complaint, gossip, or empty spiritual language."],
    ["sabbath", "Practice a 10-minute Sabbath pause with no multitasking, no phone, and no productivity goal."],
    ["honor parents", "Show honor through one action: call, pray, help, forgive, or speak respectfully."],
    ["do not murder", "Refuse contempt today; repair one harsh word, angry silence, or dismissive attitude."],
    ["do not commit adultery", "Guard covenant faithfulness by removing one source of temptation or giving one intentional act of love."],
    ["do not steal", "Give back, give credit, or give generously in one place where you could have taken for yourself."],
    ["false witness", "Speak one truthful, healing sentence today where exaggeration or silence would be easier."],
    ["covet", "Practice contentment by thanking God for three specific gifts already in your life."],
    ["hagar", "Notice someone who may feel unseen and offer them dignity, attention, or prayer."],
    ["ruth", "Practice loyal love through one steady act of presence or help."],
    ["hannah", "Pray honestly about one ache before trying to fix or explain it."],
    ["esther", "Take one courageous step that faithfulness requires in this season."],
    ["mary", "Say yes to God in one small place where obedience feels inconvenient."],
    ["deborah", "Use your influence today to strengthen, guide, or encourage someone toward obedience."],
    ["prophet", "Respond to God's word with one act of truth-telling, repentance, justice, or hope."],
    ["justice", "Do one quiet act of fairness or advocacy for someone with less power than you."],
    ["mercy", "Choose mercy in one moment where criticism would come naturally."],
    ["marriage", "Offer your spouse, or a close loved one, one specific act of listening, service, repair, or affection."],
    ["forgive", "Release one debt you have been rehearsing and pray for the person by name."],
    ["gentle words", "Answer one tense moment with a softer tone than the moment demands."],
    ["hardship", "Name your burden to God, then ask one trusted person for prayer or support."],
    ["anxiety", "Trade five minutes of worry for five minutes of slow prayer and breathing."],
    ["lament", "Write a two-sentence lament: what hurts, and what you are choosing to trust about God."],
    ["jesus wept", "Be present with someone's pain today without rushing to explain it away."],
    ["divorce", "Choose one healing action today: wise counsel, a boundary, prayer, rest, or asking for help."],
    ["body", "Honor God with your body through water, movement, rest, or a nourishing meal."],
    ["renewed mind", "Replace one repeated anxious or harsh thought with a verse-based truth."],
    ["food", "Pause before one meal or drink and receive it with unhurried gratitude."],
    ["sleep", "Protect your rest tonight by ending one screen or task earlier than usual."],
    ["prayer", "Set a timer for five quiet minutes after praying, leaving room to listen before moving on."],
    ["be still", "Practice two minutes of stillness with your hands open before God."],
    ["intercede", "Pray for three people by name: one close, one difficult, and one in need."],
    ["confess", "Confess one specific thing and receive God's forgiveness without self-punishment."],
    ["love", "Choose one inconvenient act of love for someone who cannot repay you."],
    ["joy", "Name one reason for joy and share it with someone before the day ends."],
    ["peace", "Become a peacemaker in one small place: lower the temperature, listen, or apologize."],
    ["patience", "Practice patience by waiting without complaining in one ordinary delay."],
    ["kindness", "Do one hidden kindness for someone in your home, work, church, or neighborhood."],
    ["goodness", "Resist one harmful shortcut and choose what is good even if it costs more."],
    ["faithfulness", "Complete one responsibility today as worship, even if no one notices."],
    ["gentleness", "Use gentle strength with someone who is tired, defensive, or discouraged."],
    ["self-control", "Say no to one impulse so you can say yes to the Spirit."],
    ["serve", "Serve one person in a practical way today without needing attention or credit."],
    ["mission", "Start one spiritual conversation with humility, curiosity, and grace."],
    ["holy spirit", "Pause before one decision today and ask the Holy Spirit to lead your words, desires, and next step."],
    ["helper", "Ask the Holy Spirit for help before beginning something you normally do in your own strength."],
    ["spirit teaches", "Read the verse once more slowly and write down one phrase the Spirit brings to your attention."],
    ["walk by the spirit", "Before reacting today, stop and ask whether this response keeps in step with the Spirit."],
    ["gifts", "Use one gift God has given you for someone else's good today."],
    ["weakness", "Bring one weakness to God without hiding it, then take the next faithful step with Him."],
    ["angels", "Let this passage turn your attention to God: thank Him for unseen care, then serve someone quietly today."],
    ["messengers", "Carry one message of encouragement, truth, or peace to someone who needs it today."],
    ["guarded", "Pray before your next transition today, asking God to guide your steps and guard your heart."],
    ["gabriel", "Receive God's timing with humility today by surrendering one delayed hope back to Him."],
    ["empty tomb", "Share one sentence of resurrection hope with someone who feels discouraged."],
    ["worship god alone", "Remove one distraction from your worship today and give God your full attention for five minutes."],
    ["manifestation", "Ask God to reveal His character through your obedience today, then take one visible step of faith."],
    ["glory", "Pause outdoors or near a window and name one way God's goodness is visible around you."],
    ["provides", "Trust God with one need by praying specifically and taking the next responsible step."],
    ["still small voice", "Choose quiet over noise for five minutes and listen for what God may be bringing to your attention."],
    ["word became flesh", "Make God's love tangible today through one embodied act of presence, service, or kindness."],
    ["christ in you", "Before your next interaction, remember Christ lives in you and let that shape your tone."],
    ["light before others", "Do one good work quietly and intentionally so your life points back to the Father."]
  ];
  const matched =
    specificRules.find(([keyword]) => title.includes(keyword) || reference.includes(keyword)) ||
    specificRules.find(([keyword]) => focusTitle.includes(keyword));
  if (matched) return matched[1];
  const rotating = [
    "Turn today's verse into one sentence of prayer, then act on the first faithful step that comes to mind.",
    "Choose one person connected to today's passage and bless them through a word, prayer, or practical help.",
    "Let today's Scripture shape one ordinary action: how you speak, spend, pause, work, or respond.",
    "Write the verse reference somewhere visible and return to it before your next major decision.",
    "Practice the opposite of the sin, fear, or pressure this passage exposes.",
    "Share one sentence from today's focus with someone who would be encouraged by it.",
    "Take a short walk or quiet pause and ask God how this passage should become lived obedience today."
  ];
  return rotating[(dayNumber - 1) % rotating.length];
}

function themedApplicationAndDeed(focus, dayNumber) {
  if (focus.id === "self-love-and-confidence") {
    const applications = [
      "Where have I been letting performance, appearance, or other people's opinions define what God has already spoken over me?",
      "What part of myself do I struggle to receive as intentionally made by God, and how can I bring that honestly to Him today?",
      "What would change in my self-talk if I treated God's design with gratitude instead of criticism?",
      "How can loving myself biblically help me love God and my neighbor with more freedom, not selfishness?",
      "What condemning label do I need to reject because it does not agree with my identity in Christ?",
      "Where do I need to practice compassion toward myself so I can become more compassionate toward others?",
      "What good work might God be inviting me into that I have been avoiding because I feel unqualified?",
      "What would it look like to approach God with confidence today instead of hiding in shame?",
      "Where is fear shrinking my obedience, voice, or presence, and what would power, love, and self-control look like there?",
      "What step would I take today if I truly believed God's presence was stronger than my insecurity?",
      "What thought pattern about myself needs to be renewed by God's truth?",
      "What words have I been speaking over myself, and do they sound like life or discouragement?",
      "Where can I carry myself with strength and dignity without becoming prideful or guarded?",
      "How does belonging to Christ change the way I see my body, story, gifts, and future?"
    ];
    const deeds = [
      "Write one sentence that begins, 'Because I am made in God's image...' and place it somewhere you will see it today.",
      "Thank God for three specific parts of how He made you: one physical, one personal, and one spiritual.",
      "Do one body-care action without punishment or pressure: drink water, stretch, rest, walk, or eat something nourishing.",
      "Practice one act of healthy self-respect today by saying yes honestly, saying no wisely, or asking for what you need.",
      "When a condemning thought appears, answer it out loud with: 'That is not my name in Christ.'",
      "Speak to yourself today the way you would speak to a dear friend who needed grace.",
      "Take one small step toward a gift, calling, or responsibility you have been minimizing.",
      "Pray with open hands for two minutes, asking God for mercy and grace instead of trying to earn them.",
      "Do one brave thing today that is guided by love, not fear.",
      "Before entering your next task or conversation, pray: 'God is with me, so I can show up fully.'",
      "Write down one false belief about yourself and one Scripture-shaped truth to replace it.",
      "Refuse self-insult today. If one slips out, pause and restate it with honesty and kindness.",
      "Choose posture as prayer today: stand, sit, or walk as someone held by God's strength and dignity.",
      "Do one thing that reflects Christ living in you: forgive, create, serve, rest, speak truth, or receive love."
    ];
    return {
      application: applications[(dayNumber - 1) % applications.length],
      deed: deeds[(dayNumber - 1) % deeds.length]
    };
  }

  if (focus.id === "god-loves-you") {
    const applications = [
      "Do I most often imagine God moving toward me with love, disappointment, distance, or impatience?",
      "What would it mean today to receive love as something God started, not something I achieved?",
      "Where am I still trying to become worthy of a love Christ has already demonstrated?",
      "What memory, fear, or pattern makes everlasting love hard for me to trust?",
      "How can I let God's enduring love steady one unstable emotion or situation today?",
      "Where do I need to receive God's compassion for my weakness instead of hiding it?",
      "How would I live today if I truly believed I am God's beloved child?",
      "Which part of Psalm 23 feels most needed right now: guidance, rest, restoration, comfort, provision, or nearness?",
      "Where is Jesus inviting me to receive love that serves, washes feet, and stays to the end?",
      "What helps me abide in Christ's love instead of drifting into hurry, shame, or striving?",
      "Which dimension of God's love feels hardest to believe right now: width, length, height, or depth?",
      "What fear loses power when I remember that nothing can separate me from God's love in Christ?",
      "How might God's delight and nearness quiet something restless in me today?",
      "Where do I need to begin again today because God's mercy is new this morning?"
    ];
    const deeds = [
      "Read John 3:16 slowly three times and replace 'the world' with your name once as a personal reminder of God's giving love.",
      "Before doing anything productive, pause and pray: 'God loved me first.' Let that be enough for one full minute.",
      "Write 'Christ loved me here too' beside one part of your story you are tempted to hide.",
      "Take a short walk and repeat: 'Your love is everlasting; Your kindness draws me.'",
      "Send one message of steady encouragement to someone who may need to remember God's love endures.",
      "Name one weakness to God without apologizing for being human, then receive His compassion for you.",
      "Do one small thing today as a beloved child, not as someone trying to prove they deserve love.",
      "Choose one phrase from Psalm 23 and carry it through your next activity as a breath prayer.",
      "Serve someone in a quiet, practical way as a reflection of Jesus' faithful love.",
      "Set a two-minute reminder to pause, breathe, and remain in Christ's love before rushing onward.",
      "Draw or write four words: wide, long, high, deep. Under each one, name one way God has loved you.",
      "When fear rises today, answer it with: 'This cannot separate me from God's love.'",
      "Let God quiet you by love: sit still for three minutes with no fixing, explaining, or striving.",
      "Mark a fresh start today by receiving mercy and then extending mercy to yourself or someone else."
    ];
    return {
      application: applications[(dayNumber - 1) % applications.length],
      deed: deeds[(dayNumber - 1) % deeds.length]
    };
  }

  if (focus.id === "purpose") {
    const applications = [
      "Where have I been looking for purpose in achievement, approval, or productivity instead of beginning with being made in God's image?",
      "What fear, insecurity, or excuse sounds loudest when I imagine God calling me into something meaningful?",
      "Which good work might already be in front of me, prepared by God, but easy to overlook because it feels ordinary?",
      "How might this season, even the hard or confusing parts, be forming Christlike character in me?",
      "What anxious striving is distracting me from seeking God's kingdom first today?",
      "Which gift, experience, skill, or burden has God given me that could strengthen someone else?",
      "Where can my life point quietly but clearly back to God instead of drawing attention only to myself?",
      "What small responsibility needs my faithfulness today because it may be part of a larger work God is shaping?",
      "How would my work, chores, caregiving, or daily tasks change if I did them directly for the Lord?",
      "What is already in my hand that I keep dismissing as too simple for God to use?",
      "Where might God be asking for courage, timing, and surrender instead of comfort?",
      "Who can I serve today in a way that reflects Jesus' definition of greatness?",
      "What weight, distraction, comparison, or sin is slowing my race with God right now?",
      "What would it look like to finish this focus by naming one assignment God has placed in front of me for this season?"
    ];
    const deeds = [
      "Take a 15-minute walk and thank God for creating you with intention; name one responsibility you can steward with love today.",
      "Write one honest sentence that begins, 'God, I feel unqualified because...' then answer it with: 'But You are with me.'",
      "Do one prepared good work today without announcing it: encourage, help, repair, organize, pray, give, or show up faithfully.",
      "List one way God has used a difficult season to grow compassion, endurance, humility, wisdom, or dependence in you.",
      "Before your next task, pray: 'Your kingdom first.' Then choose one action that reflects trust instead of hurry.",
      "Offer one gift today in a practical way: teach, listen, create, organize, serve, lead, comfort, or give.",
      "Let your light show through one visible act of goodness that gives God glory rather than seeking praise.",
      "Choose one small task you normally rush through and do it with care as an act of faithfulness to God.",
      "Turn one ordinary work block into worship by beginning with prayer and ending with gratitude.",
      "Hold or name something already in your hand: a skill, contact, resource, story, or opportunity. Ask God how to use it.",
      "Take one courageous step you have been delaying: make the call, ask the question, apologize, volunteer, apply, or begin.",
      "Serve someone today in a low-status way, choosing humility over recognition.",
      "During active time with God, name one weight to lay down and one next step to run with endurance.",
      "Write a one-sentence purpose prayer for this season: 'Lord, help me faithfully...' and place it where you will see it."
    ];
    return {
      application: applications[(dayNumber - 1) % applications.length],
      deed: deeds[(dayNumber - 1) % deeds.length]
    };
  }

  return null;
}

function applicationForDay(focus, day, dayNumber) {
  const title = day[1].toLowerCase();
  const focusTitle = focus.title.toLowerCase();
  const reference = day[2];
  const rules = [
    ["light", `Where do I need God to separate light from darkness in my thoughts, choices, or home life as I sit with ${reference}?`],
    ["sky", `What does God's order in ${reference} invite me to trust instead of trying to control today?`],
    ["vegetation", `Where is God growing something slowly in me, and how can I cooperate with that growth today?`],
    ["sun", `What rhythm, boundary, or season do I need to honor more faithfully after reading ${reference}?`],
    ["sea creatures", "How does the abundance of God's creation expand my worship beyond only what is useful to me?"],
    ["image", "Who around me needs to be treated today as someone bearing God's image, not as an interruption or obstacle?"],
    ["rests", "What would holy rest look like today if I trusted God's work more than my own striving?"],
    ["sin", "What temptation, shame, or hiding pattern does this passage ask me to bring into the open with God?"],
    ["serpent", "What lie about God, myself, or obedience do I need to reject today?"],
    ["paradise lost", "Where do I need to grieve honestly while still trusting God's mercy and covering?"],
    ["cain", "Where is comparison turning into resentment, and how can I choose humility before it grows?"],
    ["noah", "What faithful step is God asking me to take even if the results are not visible yet?"],
    ["flood", "What needs to be washed away, released, or surrendered so I can begin again with God?"],
    ["covenant", "Which promise of God can steady my next decision or conversation today?"],
    ["redeemer", "Where do I need to remember that God is not distant from my loss, longing, or waiting?"],
    ["hope", "What would it look like to place hope in the Lord instead of in timing, control, or outcomes?"],
    ["rescued", "Where am I living as if I am still trapped when Christ has already rescued me?"],
    ["ransom", "How does the cost of Christ's love change what I value, chase, or fear today?"],
    ["serve", "Where can redemption move from something I believe into someone I serve?"],
    ["return to me", "What small return to God is available to me today?"],
    ["repent", "What would repentance look like as a hopeful turn toward life, not a shame-filled punishment?"],
    ["gate", "What am I trying to enter apart from Jesus, and how can I come through Him today?"],
    ["jesus is lord", "Which part of my schedule, speech, or decision-making needs to come under Jesus' lordship today?"],
    ["crown of life", "What trial is asking for endurance, and what promise can keep me steady?"],
    ["no other gods", "What is asking for first place in my heart, and what would worshipful reordering look like today?"],
    ["no idols", "What created thing am I asking to give me what only God can give?"],
    ["god's name", "Do my words make God's name seem weighty, trustworthy, and holy? Where can I repair careless speech?"],
    ["sabbath", "What does my resistance to rest reveal about trust, identity, or fear?"],
    ["honor parents", "How can I honor rightly while still practicing truth, wisdom, and healthy boundaries?"],
    ["do not murder", "Where has anger, contempt, or dismissal taken root in me, and what repair is needed?"],
    ["adultery", "How can I guard covenant love, purity, and integrity in what I look at, nurture, and pursue?"],
    ["steal", "Where do I need to practice gratitude, honesty, or generosity instead of taking?"],
    ["false witness", "Where is truth asking me to be honest, gentle, and brave?"],
    ["covet", "What gift in someone else's life can I bless instead of compare against?"],
    ["hagar", "Where do I feel unseen, and how does God's attention to Hagar change how I see myself and others?"],
    ["ruth", "What faithful love is mine to practice today, even in a small ordinary way?"],
    ["hannah", "What ache can I pray honestly instead of carrying silently?"],
    ["esther", "What courageous obedience may be needed for such a time as this?"],
    ["mary", "Where is God inviting a humble yes before I understand the whole path?"],
    ["deborah", "How can I use influence today to strengthen obedience rather than control others?"],
    ["prophet", "What truth, warning, or hope is God asking me to receive before I speak?"],
    ["justice", "Where can I practice justice in a small concrete way, not only agree with it?"],
    ["mercy", "Who needs mercy from me today, and what does mercy require without ignoring truth?"],
    ["marriage", "What would covenant-shaped love look like in one conversation or choice today?"],
    ["forgive", "What am I still rehearsing, and what first step toward forgiveness is possible with God's help?"],
    ["gentle words", "How can my tone become part of my obedience today?"],
    ["hardship", "What does this passage give me permission to feel, and what does it invite me to trust?"],
    ["anxiety", "Which worry can become prayer before it becomes a spiral?"],
    ["lament", "What honest sorrow can I bring to God without editing it first?"],
    ["jesus wept", "How does Jesus' tenderness change the way I respond to pain, mine or someone else's?"],
    ["divorce", "What healing, counsel, boundary, or support would be a faithful next step today?"],
    ["body", "How can I honor my body as God's creation without making it an idol or an enemy?"],
    ["renewed mind", "What thought needs to be interrupted and replaced with truth today?"],
    ["food", "How can receiving nourishment become gratitude instead of guilt, hurry, or control?"],
    ["sleep", "What does my rest reveal about trust, limits, and dependence on God?"],
    ["prayer", "What might change if I listened after praying instead of rushing away?"],
    ["be still", "What is stillness revealing about my hurry, fear, or desire for control?"],
    ["intercede", "Who is God placing on my heart, and how can I carry them in prayer today?"],
    ["confess", "What would honest confession open up between God and me today?"],
    ["love", "How can love become visible in one choice before the day ends?"],
    ["joy", "What joy is available through God even if my circumstances are imperfect?"],
    ["peace", "Where can I become a peaceful presence instead of adding pressure?"],
    ["patience", "What delay or frustration can become practice in patience today?"],
    ["kindness", "Who needs kindness from me in a form they can actually receive?"],
    ["faithfulness", "What responsibility can I complete as worship today?"],
    ["self-control", "What impulse needs a holy pause before I respond?"],
    ["holy spirit", "Where do I need the Holy Spirit's help, comfort, conviction, or power today?"],
    ["helper", "What am I trying to handle alone that the Helper is inviting me to bring to Him?"],
    ["walk by the spirit", "What would it look like to keep in step with the Spirit in my next reaction?"],
    ["gifts", "Which gift has God entrusted to me for someone else's good today?"],
    ["angels", "How does God's unseen care turn my attention toward worship instead of fascination or fear?"],
    ["manifestation", "Am I seeking signs for control, or asking God to make His character visible through faithful obedience?"],
    ["glory", "Where is God's glory already visible, and how can I respond with worship?"],
    ["word became flesh", "How can God's love become tangible through my body, presence, and service today?"],
    ["christ in you", "What changes if I enter my next task remembering Christ is in me?"]
  ];
  const matched =
    rules.find(([keyword]) => title.includes(keyword) || reference.toLowerCase().includes(keyword)) ||
    rules.find(([keyword]) => focusTitle.includes(keyword));
  if (matched) return matched[1];

  const patterns = [
    `What does ${day[1]} show me about God's character in ${reference}, and what response would honor Him today?`,
    `Where does ${reference} invite me to trust God with my body, pace, words, or relationships today?`,
    `What one phrase from ${reference} should I carry into my next ordinary activity?`,
    `How can ${day[1]} move from something I read into something I practice before tonight?`,
    `What is God correcting, comforting, or strengthening in me through ${reference}?`,
    `Who might be blessed if I lived this passage with humility, courage, and love today?`,
    `What would obedience look like if I took ${reference} seriously for the next hour?`,
    `Where do I need to receive this Scripture as invitation rather than pressure?`,
    `What does this passage make me want to pray before I keep moving?`,
    `How can today's active time with God help this truth settle into both my heart and body?`,
    `What distraction might keep me from living ${day[1]}, and how can I gently remove it?`,
    `What is one small sign of faithfulness I can practice because of ${reference}?`
  ];
  return patterns[(dayNumber - 1) % patterns.length];
}

function passageParts(reference) {
  return String(reference)
    .replace(/\bRomans Romans\b/gi, "Romans")
    .split(/\s+and\s+|;\s*/i)
    .map((part) => part.trim())
    .filter(Boolean);
}

async function loadVerseText(reference) {
  verseText.textContent = "Loading full passage...";
  state.currentPassageReference = reference;
  state.currentPassageText = "";
  updateReadPassageButton();
  const parts = passageParts(reference);
  try {
    const passages = await Promise.all(
      parts.map(async (part) => {
        const response = await fetch(`https://bible-api.com/${encodeURIComponent(part)}?translation=web`);
        if (!response.ok) throw new Error("Passage unavailable.");
        const data = await response.json();
        return {
          reference: data.reference || part,
          text: String(data.text || "").trim()
        };
      })
    );
    state.currentPassageText = passages.map((passage) => `${passage.reference}. ${passage.text}`).join("\n\n");
    verseText.innerHTML = passages
      .map((passage) => `
        <article class="passage-block">
          <strong>${escapeHtml(passage.reference)}</strong>
          <p>${escapeHtml(passage.text)}</p>
        </article>
      `)
      .join("");
  } catch {
    state.currentPassageText = "";
    verseText.innerHTML = `
      <p>Full passage text could not load right now. Use the reference above for your Bible reading.</p>
      <small>Passages are loaded from the public-domain World English Bible when available.</small>
    `;
  }
  updateReadPassageButton();
}

function speechSupported() {
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

function saveSpeechSettings() {
  localStorage.setItem("walkWithGodSpeechSettings", JSON.stringify(state.speechSettings));
}

function populateVoiceOptions() {
  if (!speechSupported()) return;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) {
    return;
  }
  const preferredVoice = bestAvailableSpeechVoice(voices);
  state.speechSettings.voiceURI = preferredVoice?.voiceURI || "";
  saveSpeechSettings();
  updateReadPassageButton();
}

function bestAvailableSpeechVoice(voices) {
  const englishVoices = voices.filter((voice) => String(voice.lang || "").toLowerCase().startsWith("en"));
  const pool = englishVoices.length ? englishVoices : voices;
  const preferredNames = ["samantha", "google uk english female", "google us english", "microsoft aria", "microsoft jenny", "victoria", "karen", "serena", "susan", "zira"];
  return (
    pool.find((voice) => preferredNames.some((name) => voice.name.toLowerCase().includes(name))) ||
    pool.find((voice) => voice.default) ||
    pool[0] ||
    null
  );
}

function selectedSpeechVoice() {
  if (!speechSupported()) return null;
  const voices = window.speechSynthesis.getVoices();
  return voices.find((voice) => voice.voiceURI === state.speechSettings.voiceURI) || bestAvailableSpeechVoice(voices);
}

function updateReadPassageButton() {
  if (!readPassageButton) return;
  readPassageButton.textContent = state.isReadingPassage ? "Stop Reading" : "Read Passage Aloud";
  readPassageButton.disabled = !state.currentPassageText || !speechSupported();
  if (!speechSupported()) {
    readPassageStatus.textContent = "Reading aloud is not supported on this browser.";
  } else if (!state.currentPassageText && !state.isReadingPassage) {
    readPassageStatus.textContent = "Passage will be available to read aloud after it loads.";
  }
}

function stopPassageAudio(message = "") {
  if (speechSupported()) window.speechSynthesis.cancel();
  state.isReadingPassage = false;
  if (readPassageStatus) readPassageStatus.textContent = message;
  updateReadPassageButton();
}

function readPassageAloud() {
  if (!speechSupported()) {
    readPassageStatus.textContent = "Reading aloud is not supported on this browser.";
    return;
  }
  if (state.isReadingPassage) {
    stopPassageAudio("Reading stopped.");
    return;
  }
  if (!state.currentPassageText) {
    readPassageStatus.textContent = "Wait for the full passage to load first.";
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(state.currentPassageText);
  const voice = selectedSpeechVoice();
  if (voice) utterance.voice = voice;
  utterance.lang = voice?.lang || "en-US";
  utterance.rate = Number(state.speechSettings.rate) || 0.9;
  utterance.pitch = Number(state.speechSettings.pitch) || 1;
  utterance.onend = () => {
    state.isReadingPassage = false;
    readPassageStatus.textContent = "Finished reading passage.";
    updateReadPassageButton();
  };
  utterance.onerror = () => {
    state.isReadingPassage = false;
    readPassageStatus.textContent = "Reading aloud stopped.";
    updateReadPassageButton();
  };
  state.isReadingPassage = true;
  readPassageStatus.textContent = "Reading passage aloud.";
  updateReadPassageButton();
  window.speechSynthesis.speak(utterance);
}

function getDayExtras(focus, day) {
  const title = day[1].toLowerCase();
  const focusTitle = focus.title.toLowerCase();
  const dayNumber = Number((day[0].match(/\d+/) || [1])[0]);
  const themedExtras = themedApplicationAndDeed(focus, dayNumber);
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
  return {
    active: "Set aside 15-20 uninterrupted minutes for active time with God. Walk, run, stretch, practice gentle yoga, swim, bike, or do another healthy movement you can do safely. Read the passage first, then use the activity for prayer, reflection, honest conversation with God, and caring for the body He gave you.",
    application: themedExtras?.application || applicationForDay(focus, day, dayNumber) || applicationQuestions[(dayNumber - 1) % applicationQuestions.length],
    deed: themedExtras?.deed || deedForDay(focus, day, dayNumber)
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

function isFocusComplete(focus) {
  return completedSet(focus.id).size >= focus.days.length;
}

function showFocusCelebration(focus) {
  if (!focusCelebrationOverlay || !focusCelebrationTitle || !focusCelebrationCopy) return;
  focusCelebrationTitle.textContent = `${focus.title} completed`;
  focusCelebrationCopy.textContent = `You completed all ${focus.days.length} days. Take a quiet moment to thank God for meeting you in this focus, then choose your next faithful step.`;
  focusCelebrationOverlay.hidden = false;
  document.body.classList.add("celebration-open");
}

function hideFocusCelebration() {
  if (!focusCelebrationOverlay) return;
  focusCelebrationOverlay.hidden = true;
  document.body.classList.remove("celebration-open");
}

function markDayComplete(focus, dayIndex, statusElement) {
  const completed = completedSet(focus.id);
  const wasFocusComplete = isFocusComplete(focus);
  const wasDayComplete = completed.has(dayIndex);
  completed.add(dayIndex);
  rememberCompletionDate();
  saveCompleted();
  if (state.user) {
    apiFetch("/api/progress", { method: "POST", body: JSON.stringify({ focusId: focus.id, dayIndex }) }).catch((error) => {
      if (statusElement) statusElement.textContent = error.message;
    });
  }
  const becameFocusComplete = !wasDayComplete && !wasFocusComplete && isFocusComplete(focus);
  return { becameFocusComplete };
}

function clampActiveDay(focus) {
  state.activeDayIndex = Math.max(0, Math.min(state.activeDayIndex, focus.days.length - 1));
}

function saveActivePosition(options = {}) {
  if (!state.activeId) return;
  const dayIndex = Number(state.activeDayIndex) || 0;
  const key = `${state.activeId}:${dayIndex}`;
  localStorage.setItem("walkWithGodActiveFocus", state.activeId);
  localStorage.setItem("walkWithGodActiveDay", String(dayIndex));
  if (options.sync === false || !state.user || state.lastSyncedActivePosition === key) return;
  state.lastSyncedActivePosition = key;
  apiFetch("/api/active-position", {
    method: "POST",
    body: JSON.stringify({ focusId: state.activeId, dayIndex })
  }).catch(() => {
    state.lastSyncedActivePosition = "";
  });
}

function renderFocusList() {
  themeList.innerHTML = state.focuses
    .map((focus) => {
      const completeCount = completedSet(focus.id).size;
      const progressPercent = Math.round((completeCount / focus.days.length) * 100);
      return `
        <button class="theme-button" type="button" data-id="${focus.id}" aria-pressed="${focus.id === state.activeId}">
          <span class="theme-mark" aria-hidden="true">${focus.mark}</span>
          <span>
            <span class="theme-name">${focus.title}</span>
            <span class="theme-purpose">${escapeHtml(focus.description)}</span>
            <span class="theme-count">${completeCount}/${focus.days.length} days complete</span>
            <span class="theme-progress-mini" aria-hidden="true"><span style="width: ${progressPercent}%"></span></span>
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
  reminderPush.checked = reminderChannelAvailability.push && state.reminder.channels?.push !== false;
  reminderEmail.checked = reminderChannelAvailability.email && Boolean(state.reminder.channels?.email);
  reminderSms.checked = Boolean(state.reminder.channels?.sms);
  reminderPush.disabled = !reminderChannelAvailability.push;
  reminderEmail.disabled = !reminderChannelAvailability.email;
  reminderSms.disabled = !reminderChannelAvailability.sms;
  if (reminderAvailabilityNote) {
    const emailText = reminderChannelAvailability.email
      ? "Email reminders are available now."
      : "Email reminders will appear once SendGrid is connected in Railway.";
    reminderAvailabilityNote.innerHTML = `<strong>Reminder options:</strong> App notifications and text reminders are available right now. ${emailText}`;
  }
  if (reminderEmailLabel) {
    reminderEmailLabel.classList.toggle("reminder-channel-disabled", !reminderChannelAvailability.email);
  }
  if (reminderEmailStatus) {
    reminderEmailStatus.textContent = reminderChannelAvailability.email ? "Available" : "Setup needed";
  }
  if (smsConsent) smsConsent.checked = localStorage.getItem("walkWithGodSmsConsent") === "true";
  if (smsConsentWrapper) smsConsentWrapper.hidden = !reminderSms.checked;
  reminderEmailAddress.value = state.reminder.email || state.user?.email || "";
  reminderPhone.value = state.reminder.phone || "";
  const supportMessage = notificationSupportMessage();
  reminderStatus.textContent = state.user
    ? supportMessage || `Reminder settings ready for ${reminderTime.value}. Choose the reminder methods you want to use.`
    : "Sign in to save app reminders to your account and enable push.";
}

function renderMode() {
  soloModeButton.classList.toggle("is-active", state.mode === "solo");
  communityModeButton.classList.toggle("is-active", state.mode === "community");
  communityForm.hidden = state.mode !== "community";
  communityFeed.hidden = state.mode !== "community";
}

function isAppleMobileDevice() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}

function isInstalledWebApp() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function notificationSupportMessage() {
  if (!("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window)) {
    return "This browser does not support app notifications. Try Chrome or Edge on Android/desktop, Safari on Mac, or the installed Home Screen app on iPhone.";
  }
  if (isAppleMobileDevice() && !isInstalledWebApp()) {
    return "On iPhone or iPad, app notifications only work after adding Walk With God to the Home Screen and opening it from the app icon.";
  }
  if (Notification.permission === "denied") {
    return "Notifications are blocked for this browser. Turn them back on in your device or browser settings.";
  }
  return "";
}

function reminderFromForm() {
  return {
    time: reminderTime.value || "07:00",
    message: reminderMessage.value.trim() || "Spend uninterrupted time with God today.",
    channels: {
      push: reminderPush.checked,
      email: reminderChannelAvailability.email && reminderEmail.checked,
      sms: reminderChannelAvailability.sms && reminderSms.checked
    },
    email: reminderEmailAddress.value.trim(),
    phone: reminderPhone.value.trim(),
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "America/New_York"
  };
}

function renderCommunity() {
  const entries = state.community.slice(-12).reverse();
  communityFeed.innerHTML = entries.length
    ? entries
        .map((entry) => {
          const counts = reactionCounts(entry.reactions || []);
          const comments = entry.comments || [];
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
            <div class="comment-list">
              ${
                comments.length
                  ? comments
                      .map((comment) => `
                        <div class="community-comment">
                          <strong>${escapeHtml(comment.userName || "Community member")}</strong>
                          <p>${escapeHtml(comment.text)}</p>
                          <div class="comment-reaction-row">
                            ${(() => {
                              const commentCounts = reactionCounts(comment.reactions || []);
                              return `
                                <button class="reaction-button comment-reaction-button" type="button" data-comment-id="${escapeHtml(comment.id || "")}" data-reaction="praying">Praying ${commentCounts.praying || 0}</button>
                                <button class="reaction-button comment-reaction-button" type="button" data-comment-id="${escapeHtml(comment.id || "")}" data-reaction="encouraged">Encouraged ${commentCounts.encouraged || 0}</button>
                                <button class="reaction-button comment-reaction-button" type="button" data-comment-id="${escapeHtml(comment.id || "")}" data-reaction="amen">Amen ${commentCounts.amen || 0}</button>
                              `;
                            })()}
                          </div>
                        </div>
                      `)
                      .join("")
                  : '<p class="empty-comments">No comments yet.</p>'
              }
            </div>
            <form class="comment-form" data-post-id="${escapeHtml(entry.id || "")}">
              <input name="comment" placeholder="Write a short encouragement..." />
              <button class="quiet-button" type="submit">Comment</button>
            </form>
          </article>
        `;
        })
        .join("")
    : '<p class="empty-feed">No community check-ins for this focus yet.</p>';
}

function renderPrayerRequests() {
  if (prayerBoard) prayerBoard.hidden = !state.prayerBoardOpen;
  if (togglePrayerBoardButton) {
    togglePrayerBoardButton.textContent = state.prayerBoardOpen ? "Hide Prayer Requests" : "View Prayer Requests";
  }
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

function savePremiumPanels() {
  localStorage.setItem("walkWithGodPremiumPanels", JSON.stringify(state.premiumPanels));
}

function renderPremiumPanels() {
  document.querySelectorAll("[data-premium-toggle]").forEach((button) => {
    const panelId = button.dataset.premiumToggle;
    const panel = document.querySelector(`#${panelId}Panel`);
    const isOpen = Boolean(state.premiumPanels[panelId]);
    const label = premiumPanelLabels[panelId] || "Premium Section";
    if (panel) panel.hidden = !isOpen;
    button.textContent = `${isOpen ? "Hide" : "Open"} ${label}`;
    button.setAttribute("aria-expanded", String(isOpen));
    if (panel) button.setAttribute("aria-controls", panel.id);
  });
}

function premiumTypeClass(type) {
  const normalized = String(type || "").toLowerCase();
  if (normalized.includes("movement")) return "movement";
  if (normalized.includes("breath")) return "breath";
  if (normalized.includes("study")) return "study";
  return "class";
}

function renderPremium() {
  if (!premiumGrid) return;
  const isUnlocked = state.isPremium || state.user?.role === "admin";
  premiumStatus.textContent = isUnlocked
    ? "Premium preview is unlocked for this account."
    : "These are future premium options. Your daily focuses, notes, prayer requests, reminders, and community stay free.";
  premiumGrid.innerHTML = state.premiumContent.length
    ? state.premiumContent
        .map((item) => {
          const locked = item.locked && !isUnlocked;
          const typeClass = premiumTypeClass(item.type);
          return `
            <article class="premium-card premium-${typeClass}">
              <div class="premium-card-top">
                <span>${escapeHtml(item.type || "Premium")}</span>
                <strong>${locked ? "Locked" : "Preview"}</strong>
              </div>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.description)}</p>
              <div class="premium-meta">
                ${item.length ? `<span>${escapeHtml(item.length)}</span>` : ""}
                ${item.scripture ? `<span>${escapeHtml(item.scripture)}</span>` : ""}
              </div>
              ${
                item.url && !locked
                  ? `<a class="secondary-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">Open Resource</a>`
                  : `<button class="quiet-button" type="button" disabled>${locked ? "Premium Coming Soon" : "Admin Preview"}</button>`
              }
            </article>
          `;
        })
        .join("")
    : '<p class="empty-feed">Premium previews will appear here.</p>';
}

function renderBreathwork() {
  if (!breathworkList) return;
  const isUnlocked = state.isPremium || state.user?.role === "admin";
  state.activeBreathworkIndex = Math.max(0, Math.min(state.activeBreathworkIndex, premiumBreathworkRoutines.length - 1));
  const routine = premiumBreathworkRoutines[state.activeBreathworkIndex];
  breathworkLockNote.textContent = isUnlocked
    ? "Admin preview is open. These routines are ready to become future video or audio sessions."
    : "Premium coming soon. Free accounts can preview the series titles, while full guided scripts will unlock with a future premium plan.";
  breathworkList.innerHTML = premiumBreathworkRoutines
    .map((item, index) => `
      <button class="breathwork-button" type="button" data-index="${index}" aria-pressed="${index === state.activeBreathworkIndex}">
        <span>${escapeHtml(item.day)}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.duration)} - ${escapeHtml(item.technique)}</small>
      </button>
    `)
    .join("");
  breathworkDayLabel.textContent = routine.day;
  breathworkTitle.textContent = routine.title;
  breathworkDuration.textContent = routine.duration;
  breathworkTechnique.textContent = routine.technique;
  breathworkScripture.textContent = routine.scripture;
  breathworkPurpose.textContent = `${routine.purpose} - ${isUnlocked ? "Full premium preview." : "Premium preview."}`;
  breathworkScript.innerHTML = isUnlocked
    ? `<p>${escapeHtml(routine.script)}</p>`
    : `<p>This guided script is part of the future premium breathwork prayer library.</p><small>Preview: ${escapeHtml(routine.purpose)} with ${escapeHtml(routine.technique)}.</small>`;
  if (breathworkMediaCard && breathworkAudio && breathworkAudioNote) {
    const canPlayMedia = isUnlocked && Boolean(routine.audioSrc);
    breathworkMediaCard.hidden = !canPlayMedia;
    if (canPlayMedia) {
      if (!breathworkAudio.src.endsWith(routine.audioSrc)) {
        breathworkAudio.src = routine.audioSrc;
        breathworkAudio.load();
      }
      breathworkAudioNote.textContent = "Admin/premium-only audio for building the first finished breathwork video.";
    } else {
      breathworkAudio.removeAttribute("src");
      breathworkAudio.load();
      breathworkAudioNote.textContent = "";
    }
  }
  breathworkVisual.textContent = isUnlocked ? routine.visual : "Visual direction unlocks with the premium production plan.";
  breathworkVoice.textContent = isUnlocked ? routine.voice : "Voiceover direction unlocks with the full premium script.";
  breathworkPrayer.textContent = isUnlocked ? routine.prayer : "Closing prayer unlocks with the full premium routine.";
}

function renderYoga() {
  if (!yogaList) return;
  const isUnlocked = state.isPremium || state.user?.role === "admin";
  state.activeYogaIndex = Math.max(0, Math.min(state.activeYogaIndex, premiumYogaSessions.length - 1));
  const session = premiumYogaSessions[state.activeYogaIndex];
  yogaLockNote.textContent = isUnlocked
    ? "Admin preview is open. These faith-led yoga sessions are ready to become future premium videos."
    : "Premium coming soon. Free accounts can preview the session titles, while full flows and prayers will unlock with a future premium plan.";
  yogaList.innerHTML = premiumYogaSessions
    .map((item, index) => `
      <button class="yoga-button" type="button" data-index="${index}" aria-pressed="${index === state.activeYogaIndex}">
        <span>${escapeHtml(item.session)}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.duration)} - ${escapeHtml(item.style)}</small>
      </button>
    `)
    .join("");
  yogaSessionLabel.textContent = session.session;
  yogaTitle.textContent = session.title;
  yogaDuration.textContent = session.duration;
  yogaStyle.textContent = session.style;
  yogaScripture.textContent = session.scripture;
  yogaIntention.textContent = `${session.intention} ${isUnlocked ? "Modify any pose and rest whenever needed." : "Premium preview."}`;
  yogaFlow.innerHTML = isUnlocked
    ? `<p>${escapeHtml(session.flow)}</p>`
    : `<p>This movement flow is part of the future premium faith-led yoga library.</p><small>Preview: ${escapeHtml(session.style)} around ${escapeHtml(session.scripture)}.</small>`;
  yogaVisual.textContent = isUnlocked ? session.visual : "Visual direction unlocks with the premium production plan.";
  yogaVoice.textContent = isUnlocked ? session.voice : "Voiceover direction unlocks with the full premium session.";
  yogaPrayer.textContent = isUnlocked ? session.prayer : "Closing prayer unlocks with the full premium session.";
}

function renderBibleStudy() {
  if (!bibleStudyList) return;
  const isUnlocked = state.isPremium || state.user?.role === "admin";
  state.activeBibleStudyIndex = Math.max(0, Math.min(state.activeBibleStudyIndex, premiumBibleStudySessions.length - 1));
  const study = premiumBibleStudySessions[state.activeBibleStudyIndex];
  bibleStudyLockNote.textContent = isUnlocked
    ? "Admin preview is open. These in-depth sessions are ready to become future premium classes."
    : "Premium coming soon. Free accounts can preview the study titles, while full outlines, questions, and assignments will unlock with a future premium plan.";
  bibleStudyList.innerHTML = premiumBibleStudySessions
    .map((item, index) => `
      <button class="bible-study-button" type="button" data-index="${index}" aria-pressed="${index === state.activeBibleStudyIndex}">
        <span>${escapeHtml(item.session)}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.duration)} - ${escapeHtml(item.format)}</small>
      </button>
    `)
    .join("");
  bibleStudySessionLabel.textContent = study.session;
  bibleStudyTitle.textContent = study.title;
  bibleStudyDuration.textContent = study.duration;
  bibleStudyFormat.textContent = study.format;
  bibleStudyScripture.textContent = study.scripture;
  bibleStudyAim.textContent = `${study.aim} ${isUnlocked ? "Full premium class preview." : "Premium preview."}`;
  bibleStudyOutline.innerHTML = isUnlocked
    ? `<p>${escapeHtml(study.outline)}</p>`
    : `<p>This teaching outline is part of the future premium Bible study class library.</p><small>Preview: ${escapeHtml(study.aim)}</small>`;
  bibleStudyQuestions.textContent = isUnlocked ? study.questions : "Discussion questions unlock with the full premium study.";
  bibleStudyPractice.textContent = isUnlocked ? study.practice : "Practice assignments unlock with the full premium study.";
  bibleStudyPrayer.textContent = isUnlocked ? study.prayer : "Closing prayer unlocks with the full premium study.";
}

function renderWalking() {
  if (!walkingList) return;
  const isUnlocked = state.isPremium || state.user?.role === "admin";
  state.activeWalkingIndex = Math.max(0, Math.min(state.activeWalkingIndex, premiumWalkingSessions.length - 1));
  const walk = premiumWalkingSessions[state.activeWalkingIndex];
  walkingLockNote.textContent = isUnlocked
    ? "Admin preview is open. These guided walks are ready to become future premium audio or video sessions."
    : "Premium coming soon. Free accounts can preview the walking session titles, while full guides and prayer prompts will unlock with a future premium plan.";
  walkingList.innerHTML = premiumWalkingSessions
    .map((item, index) => `
      <button class="walking-button" type="button" data-index="${index}" aria-pressed="${index === state.activeWalkingIndex}">
        <span>${escapeHtml(item.session)}</span>
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.duration)} - ${escapeHtml(item.pace)}</small>
      </button>
    `)
    .join("");
  walkingSessionLabel.textContent = walk.session;
  walkingTitle.textContent = walk.title;
  walkingDuration.textContent = walk.duration;
  walkingPace.textContent = walk.pace;
  walkingScripture.textContent = walk.scripture;
  walkingIntention.textContent = `${walk.intention} ${isUnlocked ? "Choose a safe route and adjust pace as needed." : "Premium preview."}`;
  walkingGuide.innerHTML = isUnlocked
    ? `<p>${escapeHtml(walk.guide)}</p>`
    : `<p>This guided walk is part of the future premium Walking With God library.</p><small>Preview: ${escapeHtml(walk.duration)} at ${escapeHtml(walk.pace)} around ${escapeHtml(walk.scripture)}.</small>`;
  walkingPrompts.textContent = isUnlocked ? walk.prompts : "Prayer prompts unlock with the full premium walking session.";
  walkingVisual.textContent = isUnlocked ? walk.visual : "Audio and visual direction unlocks with the premium production plan.";
  walkingPrayer.textContent = isUnlocked ? walk.prayer : "Closing prayer unlocks with the full premium walking session.";
}

function renderAdmin() {
  const canAdmin = state.user?.role === "admin" && state.adminUnlocked;
  addFocusForm.hidden = !canAdmin;
  if (premiumContentForm) premiumContentForm.hidden = !canAdmin;
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
    <div><strong>${data.summary.premiumContent || 0}</strong><span>Premium previews</span></div>
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

  if (adminCommunityList) {
    adminCommunityList.innerHTML = data.communityPosts.length
      ? data.communityPosts
          .map((post) => `
            <article class="admin-item">
              <strong>${escapeHtml(post.userName || "Community member")} - ${escapeHtml(post.dayLabel || "Community")}</strong>
              <p>${escapeHtml(post.text)}</p>
              <small>${escapeHtml(post.dayTitle || "General check-in")}</small>
              <button class="quiet-button admin-delete-community-post" type="button" data-post-id="${escapeHtml(post.id)}">Remove Post</button>
            </article>
          `)
          .join("")
      : '<p class="empty-feed">No community posts yet.</p>';
  }

  if (adminPrayerList) {
    adminPrayerList.innerHTML = data.prayerRequests.length
      ? data.prayerRequests
          .map((request) => `
            <article class="admin-item">
              <strong>${escapeHtml(request.userName || "Community member")}</strong>
              <p>${escapeHtml(request.text)}</p>
              <small>${request.prayedBy?.length || 0} people marked this as prayed</small>
              <button class="quiet-button admin-delete-prayer-request" type="button" data-prayer-id="${escapeHtml(request.id)}">Remove Prayer Request</button>
            </article>
          `)
          .join("")
      : '<p class="empty-feed">No prayer requests yet.</p>';
  }
}

async function loadAdminDashboard() {
  if (state.user?.role !== "admin") return;
  const [summary, users, feedback, reports, communityPosts, prayerRequests] = await Promise.all([
    apiFetch("/api/admin/summary"),
    apiFetch("/api/admin/users"),
    apiFetch("/api/admin/feedback"),
    apiFetch("/api/admin/reports"),
    apiFetch("/api/admin/community"),
    apiFetch("/api/admin/prayer-requests")
  ]);
  renderAdminDashboard({
    summary,
    users: users.users || [],
    feedback: feedback.feedback || [],
    reports: reports.reports || [],
    communityPosts: communityPosts.posts || [],
    prayerRequests: prayerRequests.requests || []
  });
}

function render() {
  const focus = activeFocus();
  renderAccessGate();
  renderAccount();
  renderPremiumPanels();
  if (!state.user) {
    return;
  }
  readerEmpty.hidden = Boolean(focus);
  readerContent.hidden = !focus;
  renderToday();
  renderHomeDashboard();
  renderWalkPath();
  renderFocusList();
  renderPrayerBreath();
  renderReminder();
  renderMode();
  renderCommunity();
  renderPrayerRequests();
  renderPremium();
  renderBreathwork();
  renderYoga();
  renderBibleStudy();
  renderWalking();
  renderNotesLibrary();
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
  const dayNumber = Number((day[0].match(/\d+/) || [state.activeDayIndex + 1])[0]);
  const pathStep = pathStepForDay(focus, day, dayNumber);

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
  if (pathTodayCard) {
    pathTodayCard.dataset.step = pathStep.name.toLowerCase();
    pathTodayMark.textContent = String(pathStep.index + 1);
    pathTodayLabel.textContent = `Today on the Path · ${pathStep.verse}`;
    pathTodayTitle.textContent = pathStep.name;
    pathTodayCopy.textContent = pathStep.summary;
    pathTodayJesus.textContent = `${pathStep.jesus} (${pathStep.jesusReference})`;
  }
  if (state.currentPassageReference !== day[2]) {
    stopPassageAudio();
    loadVerseText(day[2]);
  } else {
    updateReadPassageButton();
  }
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
  renderHomeDashboard();
  renderWalkPath();
  renderReminder();
  renderMode();
  renderCommunity();
  renderPrayerRequests();
  renderPremium();
  renderBreathwork();
  renderYoga();
  renderBibleStudy();
  renderWalking();
  renderNotesLibrary();
  renderAdmin();
  saveActivePosition();
}

themeList.addEventListener("click", (event) => {
  const button = event.target.closest(".theme-button");
  if (!button) return;
  state.activeId = button.dataset.id;
  const focus = activeFocus();
  state.activeDayIndex = focus ? nextOpenDay(focus) : 0;
  loadCommunity().finally(render);
});

dayList.addEventListener("click", (event) => {
  const button = event.target.closest(".day-button");
  if (!button) return;
  state.activeDayIndex = Number(button.dataset.index);
  render();
});

notesLibraryList.addEventListener("click", (event) => {
  const button = event.target.closest(".open-note-day");
  if (!button) return;
  state.activeId = button.dataset.focusId;
  state.activeDayIndex = Number(button.dataset.dayIndex);
  document.querySelector("#themes").scrollIntoView({ behavior: "smooth" });
  loadCommunity().finally(render);
});

if (breathworkList) {
  breathworkList.addEventListener("click", (event) => {
    const button = event.target.closest(".breathwork-button");
    if (!button) return;
    state.activeBreathworkIndex = Number(button.dataset.index);
    localStorage.setItem("walkWithGodBreathworkIndex", String(state.activeBreathworkIndex));
    renderBreathwork();
  });
}

if (yogaList) {
  yogaList.addEventListener("click", (event) => {
    const button = event.target.closest(".yoga-button");
    if (!button) return;
    state.activeYogaIndex = Number(button.dataset.index);
    localStorage.setItem("walkWithGodYogaIndex", String(state.activeYogaIndex));
    renderYoga();
  });
}

if (bibleStudyList) {
  bibleStudyList.addEventListener("click", (event) => {
    const button = event.target.closest(".bible-study-button");
    if (!button) return;
    state.activeBibleStudyIndex = Number(button.dataset.index);
    localStorage.setItem("walkWithGodBibleStudyIndex", String(state.activeBibleStudyIndex));
    renderBibleStudy();
  });
}

if (walkingList) {
  walkingList.addEventListener("click", (event) => {
    const button = event.target.closest(".walking-button");
    if (!button) return;
    state.activeWalkingIndex = Number(button.dataset.index);
    localStorage.setItem("walkWithGodWalkingIndex", String(state.activeWalkingIndex));
    renderWalking();
  });
}

if (readPassageButton) {
  readPassageButton.addEventListener("click", readPassageAloud);
}

if (passageRateInput) {
  passageRateInput.value = String(state.speechSettings.rate || 0.9);
  passageRateInput.addEventListener("input", () => {
    state.speechSettings.rate = Number(passageRateInput.value);
    saveSpeechSettings();
  });
}

if (passagePitchInput) {
  passagePitchInput.value = String(state.speechSettings.pitch || 1);
  passagePitchInput.addEventListener("input", () => {
    state.speechSettings.pitch = Number(passagePitchInput.value);
    saveSpeechSettings();
  });
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-premium-toggle]");
  if (!button) return;
  const panelId = button.dataset.premiumToggle;
  state.premiumPanels[panelId] = !state.premiumPanels[panelId];
  if (state.premiumPanels[panelId]) localStorage.setItem("walkWithGodPremiumPreviewOpened", "true");
  savePremiumPanels();
  renderPremiumPanels();
});

completeButton.addEventListener("click", () => {
  const focus = activeFocus();
  const result = markDayComplete(focus, state.activeDayIndex, noteStatus);
  if (!result.becameFocusComplete) state.activeDayIndex = nextOpenDay(focus);
  render();
  if (result.becameFocusComplete) showFocusCelebration(focus);
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
  const result = markDayComplete(focus, state.activeDayIndex, todayStatus);
  if (!result.becameFocusComplete) state.activeDayIndex = nextOpenDay(focus);
  todayStatus.textContent = result.becameFocusComplete
    ? `${focus.title} completed. Take a moment to celebrate what God has walked you through.`
    : "Completed for today. Welcome back whenever you are ready for the next step.";
  render();
  if (result.becameFocusComplete) showFocusCelebration(focus);
});

if (celebrationCloseButton) {
  celebrationCloseButton.addEventListener("click", hideFocusCelebration);
}

if (celebrationNextFocusButton) {
  celebrationNextFocusButton.addEventListener("click", () => {
    hideFocusCelebration();
    document.querySelector("#themes").scrollIntoView({ behavior: "smooth" });
  });
}

if (focusCelebrationOverlay) {
  focusCelebrationOverlay.addEventListener("click", (event) => {
    if (event.target === focusCelebrationOverlay) hideFocusCelebration();
  });
}

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
  renderHomeDashboard();
});

saveNoteButton.addEventListener("click", () => {
  const focus = activeFocus();
  if (!focus) {
    noteStatus.textContent = "Choose a focus before saving a note.";
    return;
  }
  const key = dayKey();
  const noteText = noteInput.value.trim();
  const checkin = {
    stoodOut: stoodOutInput.value.trim(),
    invitation: invitationInput.value.trim(),
    bless: blessInput.value.trim()
  };
  if (!noteText && !checkin.stoodOut && !checkin.invitation && !checkin.bless) {
    noteStatus.textContent = "Add a note or check-in detail before saving.";
    return;
  }
  state.notes[key] = noteText;
  state.checkins[key] = checkin;
  saveNotes();
  saveCheckins();
  renderNotesLibrary();
  renderHomeDashboard();
  if (!state.user) {
    noteStatus.textContent = "Note saved on this device. Sign in to sync it.";
    return;
  }
  const serverText = noteText || notePreview({ text: noteText, checkin });
  apiFetch("/api/notes", {
    method: "POST",
    body: JSON.stringify({ focusId: focus.id, dayIndex: state.activeDayIndex, text: serverText })
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

reminderForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (reminderChannelAvailability.email && reminderEmail.checked && !reminderEmailAddress.value.trim()) {
    reminderStatus.textContent = "Enter an email address before saving email reminders.";
    return;
  }
  if (reminderChannelAvailability.sms && reminderSms.checked && !reminderPhone.value.trim()) {
    reminderStatus.textContent = "Enter a phone number before saving text reminders.";
    return;
  }
  if (reminderChannelAvailability.sms && reminderSms.checked && smsConsent && !smsConsent.checked) {
    reminderStatus.textContent = "Please agree to the text reminder consent before saving SMS reminders.";
    return;
  }
  try {
    state.reminder = reminderFromForm();
    saveReminder();
    localStorage.setItem("walkWithGodReminderSaved", "true");
    if (smsConsent?.checked && state.reminder.channels.sms) {
      localStorage.setItem("walkWithGodSmsConsent", "true");
    } else {
      localStorage.removeItem("walkWithGodSmsConsent");
    }
    if (!state.user) {
      reminderStatus.textContent = "Reminder saved on this device. Sign in to enable app notifications.";
      return;
    }
    if (state.reminder.channels.push) {
      reminderStatus.textContent = "Saving reminder and enabling app notifications...";
    await enableAppNotifications();
    }
    await apiFetch("/api/reminder", { method: "POST", body: JSON.stringify(state.reminder) });
    const enabledChannels = [];
    if (state.reminder.channels.push) enabledChannels.push("app");
    if (state.reminder.channels.email) enabledChannels.push("email");
    if (state.reminder.channels.sms) enabledChannels.push("text");
    reminderStatus.textContent = enabledChannels.length
      ? `Reminder saved for ${state.reminder.time}. ${enabledChannels.join(", ")} reminders are turned on for this account.`
      : `Reminder saved for ${state.reminder.time}. Choose a reminder method to receive it.`;
  } catch (error) {
    reminderStatus.textContent = error.message;
  }
});

reminderSms.addEventListener("change", () => {
  if (smsConsentWrapper) smsConsentWrapper.hidden = !reminderSms.checked;
  if (!reminderSms.checked) {
    if (smsConsent) smsConsent.checked = false;
    localStorage.removeItem("walkWithGodSmsConsent");
  }
});

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

async function enableAppNotifications() {
  if (!state.user) throw new Error("Sign in before enabling app notifications.");
  const supportMessage = notificationSupportMessage();
  if (supportMessage && (isAppleMobileDevice() || !("serviceWorker" in navigator) || !("PushManager" in window) || !("Notification" in window) || Notification.permission === "denied")) {
    throw new Error(supportMessage);
  }
  if (!("serviceWorker" in navigator) || !("PushManager" in window)) throw new Error("This browser does not support app notifications.");
  if (!("Notification" in window)) throw new Error("This browser does not support notification permission.");
  const permission = await Notification.requestPermission();
  if (permission !== "granted") throw new Error("Notification permission was not granted.");
  const keyResult = await apiFetch("/api/push/public-key");
  if (!keyResult.publicKey) throw new Error("App notification keys are not ready on the server.");
  const registration = await navigator.serviceWorker.register("/service-worker.js");
  const existingSubscription = await registration.pushManager.getSubscription();
  if (existingSubscription) {
    await existingSubscription.unsubscribe();
  }
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(keyResult.publicKey)
  });
  return apiFetch("/api/push/subscribe", { method: "POST", body: JSON.stringify({ subscription }) });
}

enablePushButton.addEventListener("click", async () => {
  try {
    const result = await enableAppNotifications();
    reminderStatus.textContent = result.pushReady ? "App notifications enabled on this device." : "Subscription saved, but app notifications are not ready on the server.";
  } catch (error) {
    reminderStatus.textContent = error.message;
  }
});

testPushButton.addEventListener("click", async () => {
  try {
    if (!state.user) throw new Error("Sign in before testing reminders.");
    state.reminder = reminderFromForm();
    if (state.reminder.channels.email && !state.reminder.email) {
      throw new Error("Enter an email address before testing email reminders.");
    }
    if (state.reminder.channels.sms && !state.reminder.phone) {
      throw new Error("Enter a phone number before testing text reminders.");
    }
    if (state.reminder.channels.sms && smsConsent && !smsConsent.checked) {
      throw new Error("Please agree to the text reminder consent before testing SMS reminders.");
    }
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
      : "No reminder channel is enabled. Choose app notification or text message first.";
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

if (togglePrayerBoardButton) {
  togglePrayerBoardButton.addEventListener("click", () => {
    state.prayerBoardOpen = !state.prayerBoardOpen;
    localStorage.setItem("walkWithGodPrayerBoardOpen", String(state.prayerBoardOpen));
    renderPrayerRequests();
  });
}

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
  const focus = activeFocus();
  state.activeDayIndex = focus ? nextOpenDay(focus) : 0;
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

if (musicToggleButton && backgroundMusic) {
  musicToggleButton.addEventListener("click", () => {
    if (backgroundMusic.paused) {
      playBackgroundMusic();
    } else {
      pauseBackgroundMusic();
    }
  });
  if (musicSkipButton) {
    musicSkipButton.addEventListener("click", playNextBackgroundTrack);
  }
  backgroundMusic.addEventListener("play", renderMusicControl);
  backgroundMusic.addEventListener("pause", renderMusicControl);
  backgroundMusic.addEventListener("ended", () => playNextBackgroundTrack({ keepPlaying: true }));
  backgroundMusic.addEventListener("error", () => {
    if (musicStatus) musicStatus.textContent = "Music could not load right now.";
    renderMusicControl();
  });
}
cancelAuthButton.addEventListener("click", () => {
  authForm.hidden = true;
  authMessage.textContent = "";
});

communityFeed.addEventListener("click", (event) => {
  const commentReactionButton = event.target.closest(".comment-reaction-button[data-reaction]");
  if (commentReactionButton) {
    if (!state.user) {
      communityStatus.textContent = "Sign in to react to a reply.";
      return;
    }
    apiFetch("/api/community/comment/react", {
      method: "POST",
      body: JSON.stringify({ commentId: commentReactionButton.dataset.commentId, type: commentReactionButton.dataset.reaction })
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

communityFeed.addEventListener("submit", (event) => {
  const form = event.target.closest(".comment-form");
  if (!form) return;
  event.preventDefault();
  if (!state.user) {
    communityStatus.textContent = "Sign in to comment on a community post.";
    return;
  }
  const input = form.querySelector('input[name="comment"]');
  const text = input.value.trim();
  if (!text) {
    communityStatus.textContent = "Write a short comment first.";
    return;
  }
  apiFetch("/api/community/comment", {
    method: "POST",
    body: JSON.stringify({ postId: form.dataset.postId, text })
  })
    .then(async () => {
      input.value = "";
      communityStatus.textContent = "Comment shared.";
      await loadCommunity();
      renderCommunity();
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
      localStorage.setItem("walkWithGodFeedbackSent", "true");
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
  state.premiumContent = [];
  state.isPremium = false;
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

if (premiumContentForm) {
  premiumContentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!state.adminUnlocked) {
      premiumContentStatus.textContent = "Unlock admin before adding premium content.";
      return;
    }
    apiFetch("/api/admin/premium-content", {
      method: "POST",
      body: JSON.stringify({
        type: premiumContentType.value,
        title: premiumContentTitle.value.trim(),
        length: premiumContentLength.value.trim(),
        scripture: premiumContentScripture.value.trim(),
        description: premiumContentDescription.value.trim(),
        url: premiumContentUrl.value.trim()
      })
    })
      .then(async () => {
        premiumContentForm.reset();
        premiumContentStatus.textContent = "Premium preview added.";
        await loadPremiumContent();
        await loadAdminDashboard();
        renderPremium();
      })
      .catch((error) => {
        premiumContentStatus.textContent = error.message;
      });
  });
}

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

if (adminCommunityList) {
  adminCommunityList.addEventListener("click", (event) => {
    const button = event.target.closest(".admin-delete-community-post");
    if (!button) return;
    if (!window.confirm("Remove this community post from the shared feed?")) return;
    apiFetch("/api/admin/community/hide", {
      method: "POST",
      body: JSON.stringify({ postId: button.dataset.postId })
    })
      .then(async () => {
        adminStatus.textContent = "Community post removed.";
        await loadCommunity();
        renderCommunity();
        await loadAdminDashboard();
      })
      .catch((error) => {
        adminStatus.textContent = error.message;
      });
  });
}

if (adminPrayerList) {
  adminPrayerList.addEventListener("click", (event) => {
    const button = event.target.closest(".admin-delete-prayer-request");
    if (!button) return;
    if (!window.confirm("Remove this prayer request from the shared prayer board?")) return;
    apiFetch("/api/admin/prayer-requests/hide", {
      method: "POST",
      body: JSON.stringify({ id: button.dataset.prayerId })
    })
      .then(async () => {
        adminStatus.textContent = "Prayer request removed.";
        await loadPrayerRequests();
        renderPrayerRequests();
        await loadAdminDashboard();
      })
      .catch((error) => {
        adminStatus.textContent = error.message;
      });
  });
}

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
  populateVoiceOptions();
  if (speechSupported()) {
    window.speechSynthesis.onvoiceschanged = populateVoiceOptions;
  }
  loadActiveMusicTrack();
  await loadReminderAvailability();
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
  if (state.user && musicPreferred()) {
    if (musicStatus) musicStatus.textContent = "Tap Play Music to resume gentle background music.";
  }
}

init();
